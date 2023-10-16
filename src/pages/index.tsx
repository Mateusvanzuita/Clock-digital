import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import {
  ConteudoStyle,
  ClockTitle,
  TypeClock,
  HoverableIcon,
  HoverIcon,
  HoverIconStopwatch,
  TypeAnalogico,
  ControlButtons,
} from "../styles/home";
import DigitalClock from "../components/Clocks/ClockDigital/ClockDigital";
import AnalogClock from "../components/Clocks/ClockAnalogic/ClockAna";
import Stopwatch from "../components/Clocks/Cronometro/Cronometro";
import { VscSettings } from "react-icons/vsc";
import { Button } from "../components/Button/Button";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../components/theme/theme";
import ThemeToggle from "../components/theme/toogleTheme";

export default function Home({ initialTheme }) {
  const [time, setTime] = useState(new Date());
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAnalogClock, setIsAnalogClock] = useState(false);
  const [isStopwatch, setIsStopwatch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === "dark");


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (document.fullscreenElement) {
        setIsFullScreen(true); // Ativado
      } else {
        setIsFullScreen(false); // Desativado
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isStopwatch) {
      setIsAnalogClock(false);
    }
  }, [isStopwatch]);

  const toggleStopwatch = () => {
    setIsStopwatch(true);
    setIsAnalogClock(false);
  };

  const toggleClock = (selectedClock) => {
    if (selectedClock === "Digital") {
      setIsAnalogClock(false);
      setIsStopwatch(false);
    } else if (selectedClock === "Analógico") {
      setIsAnalogClock(true);
      setIsStopwatch(false);
    } else if (selectedClock === "Crônometro") {
      setIsAnalogClock(false);
      setIsStopwatch(true);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Layout>
        <ConteudoStyle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <ClockTitle>Relógio Online</ClockTitle>
              <VscSettings
                size={25}
                color="#1E90FF"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <HoverIcon onClick={() => toggleClock("Digital")} />
                <TypeClock onClick={() => toggleClock("Digital")}>
                  Digital
                </TypeClock>
              </div>

              <TypeAnalogico>
                <HoverableIcon onClick={() => toggleClock("Analógico")} />
                <TypeClock onClick={() => toggleClock("Analógico")}>
                  Analógico
                </TypeClock>
              </TypeAnalogico>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <HoverIconStopwatch onClick={() => toggleClock("Crônometro")} />
               <TypeClock onClick={() => toggleClock("Crônometro")}>
                  Crônometro
              </TypeClock>
              </div>
            </div>
          </div>

          {isAnalogClock ? (
            <AnalogClock />
          ) : isStopwatch ? (
            <Stopwatch />
          ) : (
            <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
          )}
          <ControlButtons>
            <div>
              {isFullScreen ? (
                <Button onClick={toggleFullScreen} text="SAIR DA TELA CHEIA" />
              ) : (
                <Button onClick={toggleFullScreen} text="TELA CHEIA" />
              )}
            </div>
            <div>
              <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </div>
          </ControlButtons>
        </ConteudoStyle>
      </Layout>
    </ThemeProvider>
  );
}
