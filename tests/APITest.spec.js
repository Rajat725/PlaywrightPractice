import { test, expect,request } from "@playwright/test";

test('Get API Calll',async({page})=>{

    let pageNumber =1;
    const apiContext=await request.newContext();
    const respones=await apiContext.get(`https://reqres.in/api/users?page=${pageNumber}`,
    {
        headers:
        {'Content-Type':'application/json'}
    }
);
    expect(respones.ok()).toBeTruthy();
    console.log(await respones.json());
    
})

test('Post API Calll',async({})=>{


    const payload={
        name: "morpheus",
        job: "leader"
    };
    const apiContext=await request.newContext();
    const respones=await apiContext.post('https://reqres.in/api/users',{
        data:payload,
        headers:  {'Content-Type':'application/json'}
    })
    expect(respones.ok()).toBeTruthy();
    console.log(await respones.json());
    
})

test.only('Local Storage tests',async({page})=>{
    const payload={userEmail: "ruhitest@yopmail.com", userPassword: "Indigo@123"};
    const apiContext=await request.newContext();
    const respones=await apiContext.post('https://www.rahulshettyacademy.com/api/ecom/auth/login',{
        data:payload,
        headers:  {'Content-Type':'application/json'}
    });
    expect(respones.ok()).toBeTruthy();
    const responseJsonBody=await respones.json();
    const token=await responseJsonBody.token;
    console.log(responseJsonBody);
    console.log(token);

    //const token=await respones.json().token;
    //console.log(token);
    await page.addInitScript((value)=>{
        window.localStorage.setItem('token',value)
    },token);
    await page.goto('https://www.rahulshettyacademy.com/client');
    await page.waitForLoadState('networkidle');
    await page.locator("//button[@routerlink='/dashboard/cart']").click();


})