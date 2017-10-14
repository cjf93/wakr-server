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
	c.ServeJSON()
}
func (c *MainController) PassButton2() {
	c.ServeJSON()
}
func (c *MainController) PassButton3() {
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
func (c *MainController) Getinfo() {
	c.Data["json"] = clock
	c.ServeJSON()
}
func (c *MainController) Firealarm() {
	clock.FireAlarm()
	c.ServeJSON()
}
func (c *MainController) Hacaidomoneda() {
	c.ServeJSON()
}
func (c *MainController) Cajaabierta() {
	clock.CajaAbierta = false
	c.ServeJSON()
}
func (c *MainController) Cajacerrada() {
	clock.CajaAbierta = false
	c.ServeJSON()
}
func (c *MainController) Checktimepassed() {
	//TODO:.....
	c.ServeJSON()
}
