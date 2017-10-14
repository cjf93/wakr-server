package controllers

import (
	"time"

	"github.com/astaxie/beego"
	"github.com/cjf93/wakr/controllers"
)

var clock controllers.Clock

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["clock"] = clock
	c.Data["Time"] = time.Now()
	c.TplName = "index.html"
}
func (c *MainController) PassButton1() {

}
func (c *MainController) PassButton2() {

}
func (c *MainController) PassButton3() {

}

//Done
func (c *MainController) HourUp() {
	clock.HourUp()
}

//Done
func (c *MainController) HourDown() {
	clock.HourDown()
}

//Done
func (c *MainController) MinuteUp() {
	clock.MinuteUp()
}

//Done
func (c *MainController) MinuteDown() {
	clock.MinuteDown()
}

//Done
func (c *MainController) Snooze() {
	clock.Snooze()
}
func (c *MainController) Toggleoff() {
	clock.AlarmFlag = false
}
func (c *MainController) Getinfo() {
	c.Data["clock"] = clock
}
func (c *MainController) Firealarm() {
	clock.Firealarm()
}
func (c *MainController) Hacaidomoneda() {

}
func (c *MainController) Cajaabierta() {
	clock.CajaAbierta = false
}
func (c *MainController) Cajacerrada() {
	clock.CajaAbierta = false
}
