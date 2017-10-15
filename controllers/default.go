package controllers

import (
	"time"

	"github.com/astaxie/beego"
	"github.com/cjf93/wakr/controllers"
)

var clock controllers.Clock

func init() {
	clock.Init()
}

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["clock"] = clock
	c.Data["Time"] = time.Now()
	c.TplName = "index.html"
}
func (c *MainController) PassButton1() {
	clock.ButtonPressed()
	c.ServeJSON()
}
func (c *MainController) PassButton2() {
	clock.Button2Pressed()
	c.ServeJSON()
}
func (c *MainController) PassButton3() {
	clock.Button3Pressed()
	c.ServeJSON()
}

//Done
func (c *MainController) HourUp() {
	clock.AddHourToAlarm()
	c.ServeJSON()
}

//Done
func (c *MainController) HourDown() {
	clock.SubstractHourToAlarm()
	c.ServeJSON()
}

//Done
func (c *MainController) MinuteUp() {
	clock.AddMinuteToAlarm()
	c.ServeJSON()
}

//Done
func (c *MainController) MinuteDown() {
	clock.SubstractMinuteToAlarm()
	c.ServeJSON()
}

//Done
func (c *MainController) Snooze() {
	clock.Snooze()
	c.ServeJSON()
}
func (c *MainController) Toggleoff() {
	clock.AlarmFlag = false
	c.ServeJSON()
}
func (c *MainController) Toggleon() {
	clock.AlarmFlag = true
	c.ServeJSON()
}
func (c *MainController) Getinfo() {
	if time.Now().Unix() > clock.Alarm.Unix() && clock.AlarmFlag {
		clock.FireAlarm()
		clock.AlarmFlag = false
	}
	c.Data["json"] = clock
	c.ServeJSON()
}
func (c *MainController) Firealarm() {
	clock.FireAlarm()
	c.ServeJSON()
}
func (c *MainController) Hacaidomoneda() {
	clock.MonedaCaida = true
	c.ServeJSON()
}
func (c *MainController) Cajaabierta() {
	clock.CajaAbierta = true
	if !clock.Catmode {
		clock.StealPaypal()
		clock.Shame = true
	}
	c.ServeJSON()
}
func (c *MainController) Cajacerrada() {
	clock.CajaAbierta = false
	c.ServeJSON()
}
func (c *MainController) Checktimepassed() {
	if !clock.CodeCorrect {
		clock.StealCoin()
	}
	c.ServeJSON()
}
func (c *MainController) Stopalarm() {
	clock.StopAlarm()
	c.ServeJSON()
}
func (c *MainController) Shameseen() {
	clock.Shame = false
	c.ServeJSON()
}
