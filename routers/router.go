package routers

import (
	"github.com/astaxie/beego"
	"github.com/cjf93/wakr-server/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})                           //Dar clock
	beego.Router("/button1", &controllers.MainController{}, "get:PassButton1") //check code
	beego.Router("/button2", &controllers.MainController{}, "get:PassButton2") //check code
	beego.Router("/button3", &controllers.MainController{}, "get:PassButton3") // retornar si code correcto y in time
	beego.Router("/hourup", &controllers.MainController{}, "get:HourUp")
	beego.Router("/houdown", &controllers.MainController{}, "get:HourDown")
	beego.Router("/minuteup", &controllers.MainController{}, "get:MinuteUp")
	beego.Router("/minutedown", &controllers.MainController{}, "get:MinuteDown")
	beego.Router("/snooze", &controllers.MainController{}, "get:Snooze")
	beego.Router("/toggleoff", &controllers.MainController{}, "get:Toggleoff")
	beego.Router("/toggleon", &controllers.MainController{}, "get:Toggleon")
	beego.Router("/getinfo", &controllers.MainController{}, "get:Getinfo")
	beego.Router("/firealarm", &controllers.MainController{}, "get:Firealarm")
	beego.Router("/hacaidomoneda", &controllers.MainController{}, "get:Hacaidomoneda")
	beego.Router("/cajaabierta", &controllers.MainController{}, "get:Cajaabierta")
	beego.Router("/cajacerrada", &controllers.MainController{}, "get:Cajacerrada")
	beego.Router("/checktimepassed", &controllers.MainController{}, "get:Checktimepassed")
	beego.Router("/stopalarm", &controllers.MainController{}, "get:Stopalarm")

	//toggle off
	//getinfo donated saved goal
	// /firealarm ?(yo activo sonido)
	// /hacaidomoneda
	// /se ha abierto caja
}
