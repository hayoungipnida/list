function validateForm() {
    const f=document.signup;


const x=document.forms["signup"]["ln"].value;
if (x==null || x=="")
    {
    alert("영문 성 입력은 필수 입력 사항입니다.");
    return false;
    }


const y=document.forms["signup"]["fn"].value;
if (y==null || y=="")
{
	alert("영문 이름 입력은 필수 입력 사항입니다.");
		return false;
}


const x1=document.forms["signup"]["kln"].value;
if (x1==null || x1=="")
{
	alert("한글 성 입력은 필수 입력 사항입니다.");
		return false;
}

const y1=document.forms["signup"]["kfn"].value;
if (y1==null || y1=="")
{
	alert("한글 이름 입력은 필수 입력 사항입니다.");
		return false;
}

const z=document.forms["signup"]["dob"].value;
if (z==null || z=="")
{
	alert("생년월일 입력은 필수 입력 사항입니다.");
		return false;
}



let sns = '0';
const form = document.signup;
for(let i=0;i<form.sex.length;i++) {
 	if(form.sex[i].checked){
        sns = '1';
    }
}
if(sns == '0') {
   alert("성별 선택은 필수 사항입니다.");
    return false; 
}

}

function validateForm1() {
	const h=document.signup;

const reg_exp1=new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$");
const match=reg_exp1.exec(h.userid.value);
if(match==null){
 alert("아이디 입력은 필수 입력 사항입니다."); 
 return false;  
}

const reg_exp=new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$");
const match1=reg_exp.exec(h.psw.value);
if(match1==null){
 alert("비밀번호 입력은 필수 입력 사항입니다.");
 return false;
}

const a1=document.forms["signup"]["psw"].value;
const a2=document.forms["signup"]["psw_c"].value;
if (a1!=a2)
{
alert("비밀번호가 일치하지 않습니다. 입력하신 내용을 확인해주세요.");
return false;
}


const b=document.forms["signup"]["pno"].value;
if (b==null || b=="")
{
	alert("휴대전화 번호 입력은 필수 입력 사항입니다.");
		return false;
}

const c=document.forms["signup"]["email"].value;
if (c==null || c=="")
{
	alert("이메일 입력은 필수 입력 사항입니다.");
		return false;
}

const d=document.forms["signup"]["address"].value;
if (d==null || d=="")
{
	alert("주소 입력은 필수 입력 사항입니다.");
		return false;
}


 alert("폼 제출 성공! (테스트용, PHP 없이 동작)");
 document.signup.submit(); 
return false;


}

function totalCheck() {
    if (!validateForm()) return false;
    if (!validateForm1()) return false;}