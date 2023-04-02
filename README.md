# Frontend
- มีการใช้ nextjs ที่เป็น react framwork ใช้ในการทำ frontend เเละใช้ axios ในการดึงข้อมูลจากตัว restful api ที่ได้ทำไว้ ซึ่งรายละเอียดเป็นดังนี้

```
cd frontend
npm i
npm run dev
```
- มีหน้าเเสดง บทความทั้งหมดในเว็บไซต์ (get all) เเละข้อความนั้นๆถ้าคลิ๊กเข้าไป (get by id) 
![main page](https://user-images.githubusercontent.com/89448778/224480033-ebe20981-4b58-4875-b833-07cf1b4be225.png)


- มีหน้า เขียน blog (ต้อง login ก่อน)
![create article](https://user-images.githubusercontent.com/89448778/224480217-25be5252-aa5e-4ffa-82bf-bb2da4182d47.png)

- หลังจากเขียนเสร็จบทความที่เขียนขึ้นก็จะไปเเสดงผลที่หน้า main
![main page 2](https://user-images.githubusercontent.com/89448778/224481334-88c85251-5bad-4b3f-8590-0f0c6a3758a4.png)

- หน้าเเสดงบทความของฉัน (get by user_name) โดยการกดที่ชื่อตรงมุมขวา
![my article page](https://user-images.githubusercontent.com/89448778/224482788-84328589-7901-4f69-9035-402f6d70f30a.png)


- หากเป็นเจ้าของบทความสามารถเเก้ไขเเละลบได้
![my article can edit or delete](https://user-images.githubusercontent.com/89448778/224480111-8c72cc59-fb46-4c2d-8e2d-307dd8b8ab07.png)

- หน้า edit article 
![edit article](https://user-images.githubusercontent.com/89448778/224480070-5b677ff9-b950-4327-9e64-0a57b9798b8b.png)

- เมื่อกดอัพเดทเเล้วมันก็จะเเก้ไขตามที่ต้องการเเละ db ก็จะ update
![after update](https://user-images.githubusercontent.com/89448778/224619230-79bef1b7-d67e-4472-b81c-8c8e31261128.png)

- ถ้าไม่มีก็จะไม่มีปุ่ม edit หรือ delete
![not my article (2)](https://user-images.githubusercontent.com/89448778/224480187-e721396f-9c39-4f52-9212-bb800702d502.png)

- มีหน้า login ซึ่งจะใช้เป็น google signin api
![login page](https://user-images.githubusercontent.com/89448778/224480281-9f20ba02-3ef6-48b5-82e1-34032f6bad86.png)
![login with google](https://user-images.githubusercontent.com/89448778/224480257-076dc020-5b55-4f1d-bbe2-eca0aa563dec.png)

- มีการใช้ session หากไม่ได้ login ก็จะไปที่หน้า เขียน blog ไม่ได้ หาก session หมดอายุก็จะออกจากระบบ
- axios เพื่อเรียกใช้ api ในการทำ CRUD บนหน้า frontend เเละใช้หลักการของ asyn await (non-blocking ทั้งหมด) พร้อมกับตรวจจับ exception
- ถ้าหากการดึงข้อมูลยังไม่เสร็จจะมีการ loading
![loading from db](https://user-images.githubusercontent.com/89448778/224482328-d4300aed-6205-42ab-88d8-83e5448ac1a1.png)

