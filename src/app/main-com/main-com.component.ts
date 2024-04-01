import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {

  start_but:boolean=false ;
  start_game(){
    this.start_but=true;
  }

 user:number=0;
 num:number=0;
 res:number=0;

 t_match:number=0;

 h_win:number=0;
 h_draw:number=0;
 h_loss:number=0;

 m_win:number=0;
 m_draw:number=0;
 m_loss:number=0;

OverallWinner:string="";
human_res:string="";
machine_res:string="";

 l_img_url:string="assets/images/lr.jpg";
 r_img_url:string="assets/images/rr.jpg"
 

  paper(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=10;
    this.res=this.user+this.num;
    this.final_result(this.res);

  }
  rock(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=20;
    this.res=this.user+this.num;
    this.final_result(this.res);


  }
  sci(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=30;
    this.res=this.user+this.num;
    this.final_result(this.res);


  }
  final_result(a:number){

      switch(a){
        case 11:alert("paper wins");
        this.pap_win();
        break;
        case 12:alert("paper loss");
        this.pap_loss();
        break;
        case 13:alert(" draw");
        this.pap_draw();
        break;
        case 21:alert("rock wins");
        this.rock_win();
        break;
        case 22:alert("rock loss");
        this.rock_loss();
        break;
        case 23:alert(" draw");
        this.rock_draw();
        break;
        case 31:alert("scissor wins");
        this.sci_win();
        break;
        case 32:alert("scissor loss");
        this.sci_loss();
        break;
        case 33:alert(" draw");
        this.sci_draw();
        break;
      }

  }

  pap_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_loss=this.m_loss+1;
    this.l_img_url="assets/images/lp.jpg"
    this.r_img_url="assets/images/rr.jpg"
    }
    pap_draw(){
      this.t_match=this.t_match+1;
      this.m_draw=this.m_draw+1;
      this.h_draw=this.h_draw+1;
      this.l_img_url="assets/images/lp.jpg"
      this.r_img_url="assets/images/rp.jpg"
    }
    pap_loss(){
      this.t_match=this.t_match+1;
      this.m_win=this.m_win+2;
      this.h_loss=this.h_loss+1;
      this.l_img_url="assets/images/lp.jpg"
      this.r_img_url="assets/images/rs.jpg"
    }
    rock_win(){
      this.t_match=this.t_match+1;
      this.h_win=this.h_win+2;
      this.m_loss=this.m_loss+1;
      this.l_img_url="assets/images/lr.jpg"
      this.r_img_url="assets/images/rs.jpg"
    }
    rock_draw(){
      this.t_match=this.t_match+1;
      this.m_draw=this.m_draw+1;
      this.h_draw=this.h_draw+1;
      this.l_img_url="assets/images/lr.jpg"
      this.r_img_url="assets/images/rr.jpg"
    }
    rock_loss(){
      this.t_match=this.t_match+1;
      this.m_win=this.m_win+2;
      this.h_loss=this.h_loss+1;
      this.l_img_url="assets/images/lr.jpg"
      this.r_img_url="assets/images/rp.jpg"  
    }
    sci_win(){
      this.t_match=this.t_match+1;
      this.h_win=this.h_win+2;
      this.m_loss=this.m_loss+1;
      this.l_img_url="assets/images/ls.jpg"
      this.r_img_url="assets/images/rp.jpg"  
    }
    sci_draw(){
      this.t_match=this.t_match+1;
      this.m_draw=this.m_draw+1;
      this.h_draw=this.h_draw+1;
      this.l_img_url="assets/images/ls.jpg"
      this.r_img_url="assets/images/rs.jpg"
    }
    sci_loss(){
      this.t_match=this.t_match+1;
      this.m_win=this.m_win+2;
      this.h_loss=this.h_loss+1;
      this.l_img_url="assets/images/ls.jpg"
      this.r_img_url="assets/images/rr.jpg" 
    }
}