import { TreeNode } from "../index";

export const work: TreeNode = {
    label: "Work",
    children: [
      {
        label: "Problem with Colleague",
        children: [ 
          {
            label: "Toxic Relation",
            children: [
              {
                label: "Insult",
                children: [],
                isLeaf: true,
                examples: [
                  "เริ่มงานใหม่ แต่ โดนหัวหน้าหัวเราะ ไม่ใช่แค่ครั้งเดียวนะ แทบทุกครั้งที่เราอธิบายตอนแกถามงาน เริ่มงานมา 5วัน แต่รู้สึกแย่มาก  หัวหน้าพูดไทยคำ อังกฤษคำ ไม่เข้าใจก็ถาม ก็มาหัวเราะ เวลาเราจะอธิบาย ว่าเราเข้าใจประมาณไหนบ้าง มีผิด มีถูกแต่โดนหัวเราะเยาะ โคตรรูสึกแย่เลย มันทำให้รู้สึกไม่ดีด้วยเลย",
                  "เป็นระดับ middle management องค์กรใหญ่มากที่หนึ่ง รายได้เราปีหนึ่งเกิน 2 ล้าน ตำแหน่งนี้มีแต่คนอยากอยู่ เพราะได้หน้า (ขอละไว้แค่นี้) แต่เพื่อนร่วมงานที่ตำแหน่งน้อยกว่า แต่เคยสนิทกันมาก อยากมาเป็นตำแหน่งนี้ ตอนแรกขอมาเป็นผู้ช่วยแต่ไม่ผ่านคุณสมบัติ ผู้ใหญ่ข้างบนไม่ approved ก็เลยหาว่าเราไม่ช่วย ตอนนี้เชนเลย ทำไม่ดีใส่ คือเอาเราไปว่าลับหลัง ปั้นน้ำเป็นตัว  พยายามโยงเรื่องให้มาเกี่ยวกับเราให้ได้ ทำให้เราเป็นคนผิด แกล้งเราทุกทาง จนเป็นซึมเศร้า คนนี้มีพวกอยู่ในองค์กร เป็นพวกที่มี power ในองค์กรมาก ฆ่าคนได้ ตอนนี้ พวกเขารวมหัวกันแกล้งเรา จะเอาเราออกให้ได้ (ขอไม่อธิบายเพิ่มเติม)",
                  "เพิ่งเริ่มงานใหม่ได้5วัน วันนี้ลาป่วยเพราะไมเกรนขึ้นแถมอาเจียน ตอนสายๆหัวหน้าทักมาบอกว่าไม่ผ่านโปร ไม่ให้ไปทำงานแล้ว พอถามเรื่องเงินที่เราทำงานไปไม่มีการตอบกลับจากหัวหน้า ตอนสัมภาษณ์บอกเราว่าไม่ต้องออกหน้างานให้อยู่ออฟฟิศ แต่พอไปทำจริงๆออกหน้างานทุกวัน ออกค่ารถเองเวลาไปหน้างาน ไม่ได้สอนงานเราแบบจริงจัง เมื่อวานให้เราออกหน้างานคนเดียว แถมคำพูดค่อนข้างToxic แบบนี้เราจะได้เงินจากเขาไหม เงินอาจจะไม่ได้เยอะแต่มันก็เงิน 🥹"
                ]
              },
              {
                label: "Disrespectful",
                children: [],
                isLeaf: true,
                examples: [
                  "ผมทำงานเป็นหัวหน้า อายุ 36 แต่ ทุกคนที่ทำงานชอบเรียกน้อง เพราะหน้าเด็กและใส คิดว่าอายุ 20เลยไม่มีคนเคารพแบบนี้ควรทำยังไงครับ",
                  "ตอนนี้หนูติดปัญหาเรื่องสังคมในที่ทำงานค่ะ \n                                หนูเป็นเด็กจบใหม่ค่ะ แต่ทำงานมาบรรจุงานในตำแหน่งผู้ช่วยผู้จัดการสาขา เงินเดือนไม่ดีมาก 17k+ แต่มีหัวหน้างานดีมากๆ เป็นผู้ใหญ่ที่รับฟังและช่วยสอนแนวทางในการแก้ปัญหาทั้งในเรื่องงานและเรืองการจัดการแนวทางชีวิตค่ะ แต่สังคมที่ทำงานก็แย่มากๆเช่นกัน สังคม toxic เพราะเกี่ยงกันทำงานค่ะ แถมรุ่นน้องที่ทำงานมองว่าอายุใกล้เคียงกันและไม่ให้ความเคารพค่ะ ล่าสุดคือโดนส่งรูปนิ้วกลางมาในแชทส่วนตัว แต่เขาใช้ไลน์ส่วนกลาง (ไลน์ของที่ทำงาน ) ส่งมาในแชทส่วนตัวค่ะ รู้สึกแย่มากๆ อยากออกก็เสียดายที่เจอหัวหน้างานที่ดี แต่สิงที่เจอมัน toxic จนไม่อยากสู้ต่อแล้วค่ะ 🥲 \n                                (ในที่ทำงานดีหมดทุกคน ทุกคนเอ็นดูมาตลอด แต่มีคนนี้คนเดียวที่มีปัญหาด้วยค่ะ รู้สึกแย่สุดๆที่เขาทำแบบนี้ แล้วหนูจัดการอารมณ์โกรธตัวเองไม่ได้ )"
                ]
              },
              {
                label: "Don't put effort",
                children: [],
                isLeaf: true,
                examples: [
                  "ช่วยแนะนำเราที่เถอะคะ เราพยามเป็นหัวหน้าที่ดี พยามเป็นกันเอง แต่น้องๆในทีมไม่กระตือรืนรันในการทำงาน บรีฟงานก็ไม่เสร็จตามเป้า เหนื่อยใจ เรามาใหม่นะคะ น้องในทีมคืออยู่ก่อน  พยามให้อิสระเต็มที่คือเราไม่ชอบหัวหน้าแบบใหนก็พยามไม่ทำกับน้องๆ แต่จะให้เวลาก็ไม่ตามเป้าหมาย เราจะเด็ดขาดก็ได้นะ เจ้าของให้สิทธิ์เต็มที่ 🥲 เราแค่อยากทำให้สังคมในการทำงาน มันดีมันไปต่อได้มันยากเหลือเกินค่ะ 🤒",
                  "รู้สึกไม่เป็นที่ยอมรับในที่ทำงานทำยังไงดีครับ\n                                ผมเป็น Leader อายุ 20 ปี ส่วนเพื่อนร่วมงานก็ 23-45 ปี ครับ เวลาที่ผมถามงานเขาตอบให้ผมเข้าใจผิดทุกครั้งเลย เวลามีปัญหาหน้างานผมก็ต้องเป็นคนแก้ไขปัญหาแต่เพื่อนร่วมงานกับไม่ให้ความร่วมมือเลย พอถามหัวหน้าก็โดนตะคอกบ่อยครั้ง Process งานก็ต้องทำความเข้าใจเอง ปัจจุบันก็ผิดๆถูกๆ หัวหน้าก็ไม่สนใจปัญหาที่ผมไม่เข้าใจงานเลยสักนิด ผมไม่สามารถแก้ปัญหาได้ตรงจุดและต้องแก้ที่ปลายเหตุเสมอ ตอนนี้ผมมีความคิดอยากลาออกเพราะทนทำไม่ไหวแล้วครับ ผมขอข้อคิดหรือคำพูดที่จะทำให้ทนทำต่อไปจนกว่าจะได้งานใหม่ได้ไหมครับ"
                ]
              }
            ]
          },
          {
            label: "Take advantage",
            children: [],
            isLeaf: true,
            examples: [
              "ทำงานมา 1 ปีนิดๆ จบป.ตรี เอกภาษาอังกฤษ อายุ 23 ปี เงินเดือน 10K (เราอยู่ต่างจังหวัด) แต่ไม่มีความก้าวหน้าในชีวิตการทำงานเลย สวัสดิการแบบครอบครัว โดนเอาเปรียบ โดนดูถูกมากมาย แถมยังโดนเหมารวมเราว่าเป็นเด็กรุ่นใหม่ เป็นพวกหัวรุนแรง เรียกร้องสิทธินั้นนี่ ที่ผ่านมาเราทนอยู่เพราะชอบสายงานนี้ แต่ตัดสินใจจะลาออกในอีก 3 เดือน เดินหน้าต่อสอบโทอิคเริ่มต้นหางานใหม่ทำ ฝากเพื่อนๆพี่ๆเป็นกำลังใจให้เราด้วยนะคะ🙏❤",
              "ฐานเงินเดือน 9000 ทำงานได้ค่าคอม 2400\n            ต้องได้เงิน11400 แต่มีหักค่าประกัน 1000 เดือนนี้มีลาป่วยไป2-3วันเพราะเกิดอุบัติเหตุ กล้ามเนื้อส่วนหลังอักเสบ ส่งวบรับรองแพทย์แล้ว 1ใบ และหยุดตามวันหยุดปกติ และมีลาไปทำธุระอีกประมาณ2วัน แต่เงินเดือนออกวันนี้ได้แค่6000คือหายไปเยอะมากกก เยอะจนตกใจ คือมันสามารถหักกันได้ถึง 5000กกว่าบาทเลยหรอคะ อยากทราบว่าจ้องไปแจ้งกรมแรงงานยังไง ไปแจ้งที่ไหนคะ เพราะแบบนี้มันเอาเปรียบกันจนเกินไปละ"
            ]
          },
         
          {
            label: "Put other jobs (โยนงานตัวเองให้คนอื่น)",
            children: [],
            isLeaf: true,
            examples: [
              "ปรึกษาหน่อยครับ ผมมีหัวหน้าที่ค่อนข้างเอาเปรียบ\n\n            ผมทำงานที่หนึ่งมาได้ 3 ปีแล้วครับ รู้สึกชอบงานนี้และเงินดี แต่เสียอย่างเดียวคือหัวหน้าชอบแอบเอางานตัวเองมาให้ช่วยทำให้ตลอด ทั้งเวลางาน เลิกงานตอนเย็น ก่อนเข้างานตอนเช้า เสาร์-อาทิตย์ วันหยุด ผมโดนส่งไลน์ให้งานกับตามงานตลอด จนผมรู้สึกเหมือนว่าตัวเองทำงานตลอดเวลา \n            \n            มันเบียดบังเวลาทำงานกับพักผ่อน แต่ผมไม่กล้าพูดเพราะเขาค่อนข้างหัวเก่าและอารมณ์ร้าย พี่ๆหลายคนก็ทนไม่ได้ ย้ายไปหลายคน แต่ผมทำอะไรไม่ค่อยได้ เพราะผมดันนั่งข้างๆเขาเลย \n            \n            เขาจะจ่ายเงินเขาให้ผมเป็นโอทีแทนให้เบิกโอทีกับบริษัท ซึ่งผมก็ไม่ได้อยากได้อยู่ดี แถมไปพูดให้คนอื่นฟังอีกว่าที่ผมทำงานเลิกช้าเพราะผมทำงานไม่เก่ง \n            \n            จนในที่สุดเขาก็โดนรีพอร์ต และย้ายไปทำตำแหน่งอื่นที่ยังไม่มีลูกน้อง หัวหน้าใหม่ของผมเขาเป็นคนใจเย็นและใช้เหตุผล แต่ติดคือ หัวหน้าเก่าผมต้องมาเป็นพี่เลี้ยงค่อยเทรนด์ให้หัวหน้าใหม่ ซึ่งเขาก็ใช้โอกาสนี้แหละแอบเอางานของเขามาให้ผมทำให้เวลางานและหลังเลิกงานอีก \n            \n            แล้วมันยิ่งหนักไปใหญ่ เพราะเขาเริ่มขอให้ผมลางาน แกล้งป่วย หรือเอาเวลาพักระหว่างวันของผมไปช่วยงานเขาในบางวัน\n            \n            ผมพยายามคิดไตร่ตรองดู เขาบอกสัญญาว่าถ้าตำแหน่งใหม่เขารอด เขาจะช่วยให้ผมได้เป็นผู้ช่วยของแผนกเขาตอนแผนกเขาขยาย แต่ผมก็เริ่มรู้สึกเหนื่อยกับเขาแล้วจริงๆ\n            \n            [เพิ่มเติมนะครับ]\n            \n            เรื่องให้ลางานแก้ป่วย คือ ผมปฎิเสธไป เพราะไม่ไหวจริง แต่ก็ยังไม่กล้าตัดขาดเขา เพราะเขาบอกเครียดมาก ไปปรึกษาจิตแพทย์ เพราะหลังจากย้ายตำแหน่ง บอสใหญ่ก็ยังไม่ปลื้ม อาจจะจ้างออก ผมได้ยินที่เขาระบายแล้วกลัวจะคิดสั้น เลยยังอยากหาวิธีที่ไม่กระทบเขา"
            ]
          }
        ]
      },
      {
        label: "Low Wage Rate",
        children: [
          {
            label: "Negotiate to lower the wage",
            children: [
              {
                label: "Junior Employee",
                children: [],
                isLeaf: true,
                examples: [
                  "สัมภาษณ์งานขอเงินเดือน 18k แต่บริษัทต่อรองเงินเดือนเหลือ 15k เพราะเป็นเด็กจบใหม่ ตอนนี้รู้สึกไม่มั่นใจในตัวเองมากค่ะ"
                ]
              },
              {
                label: "have more skillful employee",
                children: [],
                isLeaf: true,
                examples: [
                  "สวัสดีค่ะ จะมาแชร์ประสบการณ์ \n                                โดนดูถูก-ต่อเงินเดือน \n                                \n                                เรามีโทอิค775 และภาษาจีน จบนานาชาติม.รัฐ \n                                เรียกเงินไปที่20,000\n                                เขาบอกว่าเราเรียกเยอะเงินไปอีกคนพูดสเปนได้\n                                ยังเอาที่15,000 เลย คิดว่าตัวเองมีดีกว่าอีกคนยังไงที่เขาจะรับเรา? \n                                \n                                เราเลยบอกว่าแล้วแต่ทางhr จะพิจารณาความเหมาะสมเลยค่ะแล้วก็ลาขาดจ้า"
                ]
              }
            ]
          },
          {
            label: "Change job",
            children: [],
            isLeaf: true,
            examples: [
              "ขาดยามาเดือนกว่า เพราะเปลี่ยนงาน กลัวจะมีคนสังเกตเห็นความผิดปกติ ย้ายมาอยู่กับแฟนได้แค่ 1 เดือน โดนบอกเลิกแบบไม่ใยดี อึดอัดที่อยู่ด้วยกัน ทั้งที่ก่อนหน้าไม่ได้มีปัญหา เข้าใจเหตุผลคนจะไป แต่บางทีมันท้อเหลือเกิน",
              "เงินเดือน 15,500 ที่บ้านบอกน้อย ให้เริ่มหางานใหม่\n                    สวัสดีค่ะ เราเพิ่งเรียนจบ ลองสมัครงานบ.ใกล้บ้านแล้วได้ ค่ารถ ค่ากินไม่เสีย ทำ4 หยุด3 เพิ่งทำได้ไม่นาน แต่เงินเริ่มแค่ 15k นิดๆ ที่บ้านบอกไม่พอใช้ให้เริ่มหางานใหม่ เพราะตอนแรกมีบ.ในเมืองให้เงิน 18-20k แต่เราไม่อยากตื่นแต่เช้ามืดไปขึ้นรถหลายๆ ต่อเลยปฏิเสธไป เราควรเอายังไงดีคะ ลังเลเพราะภาระครอบครัวเราค่อนข้างเยอะ แต่อีกใจก็ยังไม่มีประสบการณ์เลย อยากทำที่นี่ให้เก่งก่อน\n                    ***ตอบเม้นไม่ได้ค่ะ ส่วนตัวหนูโอเคกับงานเพราะคิดว่าเงินมากแล้ว ไม่ได้ติดอะไรเลย แต่ปัญหาคือที่บ้านต้องการให้หนูช่วยเรื่องค่าใช้จ่ายและเขาคิดว่าเงินเท่านี้ไม่พอค่ะ หนูควรจัดการกับปัญหานี้ยังไง หนูเครียดที่ต้องฟังเสียงบ่นทุกวันค่ะ \n                    ***ที่บ้านหนี้เยอะค่ะ นอกจากค่าบ้านน้ำไฟ เขาต้องการให้เราช่วยมากที่สุดเท่าที่ไหวค่ะ เพราะรายได้หลักมาจากเราแทบจะทางเดียว"
            ]
          }
        ]
      },
      {
        label: "Burnout & Stress",
        children: [
          {
            label: "High amount of work",
            children: [],
            isLeaf: true,
            examples: [
              "จบใหม่อายุ 23 ทำงาน 2 ที่ เงินเดือนรวมกันประมาณ 44k-50k แต่รู้สึกเหนื่อยมากเลยค่ะ ถึงจะงานเยอะเป็นช่วงๆ แต่เป็นงานที่ต้องใช้ทักษะมาก กดดัน ต้องแม่นต้องเป๊ะ ต้องหาความรู้อยู่ตลอดเลย มีวิธีจัดการความเครียดกันยังไงคะ ส่วนตัวเป็นคนขี้เกียจและแพนิคเก่งมาก",
              "สวัสดีค่ะ เราอายุ 23 ปีทำไงดีคะ เดินไปต่อไม่ถูกเลย🥹เกิดจากการตัดสินใจอะไรผิด ก่อนหน้านี้ประมาณ 4 เดือน นี้ทำงานเทศบาล (สบายอยู่แล้ว) แต่เงินเดือนน้อย อยู่ใกล้บ้าน เราจบเอกภาษาไทยมา แต่ไม่ได้จบสายครูมา เราเลยอยากจะไปเรียนต่อ ป.บัณฑิต เพื่ออยากได้ใบประกอบวิชาชีพครู เราจึงสอบได้ครูเอกชน พอเข้าไปทำงานจริงๆ เรากลับไม่โอเคเลย เพราะระบบงานเอกชนมันเหนื่อยมากก แบบกลับมาร้องไห้ทุกวัน เกือบเป็นโรคซึมเศร้า 😢 แถมโรงเรียนเอกชนแห่งนี้ไม่ให้ครูภายในไปสอบใบประกอบวิชาชีพอีกด้วย เราเฟลมากเพราะเราลาออกจากงานประจำมาแล้ว เท่ากับว่าเราเป็นคนตกงานตอนนี้ แล้วงานที่โอเคแถวบ้านก็หายากมากด้วย ต้องไปแถวภาคกลางหรือต่างจังหวัดไกลๆ เรานอนหมกตัวอยู่ในห้องเดือนนึง ร้องไห้ทุกวัน จนบางช่วงนึกถึงเรื่องฆ่าตัวตาย เรารู้สึกไม่มีอนาคตเลยตอนนี้ พ่อแม่ก็แก่ขึ้นทุกวัน 😢😢😢"
            ]
          },
          {
            label: "Lack of Motivation",
            children: [
              {
                label: "Bored job",
                children: [],
                isLeaf: true,
                examples: [
                  "อายุ20ค่ะ งานประจำรายได้12ชม/470บาท ทำงานรปภ.ค่ะ รู้สึกเสียดายเวลาชีวิตมาก ไม่มีวันหยุดเลย เป็นงานที่นึกภาพอนาคตไม่ออก ไม่มีทางเจริญไปในตำแหน่งที่สูงกว่านี้แล้ว รู้สึกหมดแพชชั่น หมดไฟในการทำงานมาก ทำไงดีคะ",
                  "ถ้าเราจะลาออกเพียงเพราะ “ไม่สนุกกับงานรู้สึกว่างานเริ่มน่าเบื่อวนลูป” พึ่งทำได้สัก 2เดือน จะดูเป็นคนไม่อดทนไหมครับ\n                                - หัวหน้างานดี\n                                - งานสบาย ไม่กดดันมาก\n                                - เพื่อนร่วมงานค่อนข้างมีอายุ\n                                - ทำจันทร์-เสาร์ ไม่มีOT"
                ]
              },
              {
                label: "Unskilled",
                children: [],
                isLeaf: true,
                examples: [
                  "อยากออกจากเซฟโซน ทำยังไงดีคะ \n                                เราทำงานอยู่ที่นึงตั้งแต่เรียนจบ มาสามปีแล้ว มีข้าวเที่ยงกินฟรี เพราะเขาเลี้ยง ขนมฟรี  โบนัส6,000 มาสามปีแล้ว  งานไม่หนัก เพราะไม่ได้ทำอะไรเลยนอกจากแพ็คของ2-3กล่องต่อวัน แต่เราเข้าสมัครด้วยแอดมินการตลาด แรกๆเป็นชาเลนจ์ค่ะ ดูมีอะไรให้ทำให้สู้เต็มไปหมด หลังไม่มีเลย เราแทบไม่ได้สร้างผลงานหรือทำอะไรที่เป็นชิ้นเป็นอันเลยนอกจากไปเป็นเบ๊คนอื่น ตัดกระดาษให้ ทำทุกอย่างตามคนขอช่วย มันไม่เหนื่อยแ อย่างที่บอก เฒ่าแก่ดีมาก แต่เราเหมือนคนไม่มีความสามารถขึ้นทุกวัน \n                                \n                                จนเราไปสอบพนักงานมหาลัยได้ เงินเดือนพอๆกันกับที่เก่า แต่มันต้องใช้ความละเอียดสูง  มีคนสอนงานแน่นอน เราเลยจะลาออกไปเสี่ยงดู  แต่เราบอกเพื่อนร่วมงานที่สนิทก่อน กลายเป็นพอบอกไป มีแต่คนบอกว่า เราทำไม่ได้หรอก เราทำงานไม่ละเอียดนะ มันงานเอกสารนะ มันไม่เกี่ยวกับกราฟฟิกเลยนะ ถ้าทดลองไม่ผ่าน ก็ออกมาว่างงานนะ บลาๆ เครียดจนเส้นเลือดจะแตกแล้ววไม่กล้าไปเลย ที่เขาพูดทำให้เรากลัวการเริ่มต้นใหม่มาก กลัวผิดหวังมากเลยค่ะอยากออกจากเซฟโซน ทำยังไงดีคะ \n                                เราทำงานอยู่ที่นึงตั้งแต่เรียนจบ มาสามปีแล้ว มีข้าวเที่ยงกินฟรี เพราะเขาเลี้ยง ขนมฟรี  โบนัส6,000 มาสามปีแล้ว  งานไม่หนัก เพราะไม่ได้ทำอะไรเลยนอกจากแพ็คของ2-3กล่องต่อวัน แต่เราเข้าสมัครด้วยแอดมินการตลาด แรกๆเป็นชาเลนจ์ค่ะ ดูมีอะไรให้ทำให้สู้เต็มไปหมด หลังไม่มีเลย เราแทบไม่ได้สร้างผลงานหรือทำอะไรที่เป็นชิ้นเป็นอันเลยนอกจากไปเป็นเบ๊คนอื่น ตัดกระดาษให้ ทำทุกอย่างตามคนขอช่วย มันไม่เหนื่อยนะ อย่างที่บอก เฒ่าแก่ดีมาก แต่เราเหมือนคนไม่มีความสามารถขึ้นทุกวัน \n                                \n                                จนเราไปสอบพนักงานมหาลัยได้ เงินเดือนพอๆกันกับที่เก่า แต่มันต้องใช้ความละเอียดสูง  มีคนสอนงานแน่นอน เราเลยจะลาออกไปเสี่ยงดู  แต่เราบอกเพื่อนร่วมงานที่สนิทก่อน กลายเป็นพอบอกไป มีแต่คนบอกว่า เราทำไม่ได้หรอก เราทำงานไม่ละเอียดนะ มันงานเอกสารนะ มันไม่เกี่ยวกับกราฟฟิกเลยนะ ถ้าทดลองไม่ผ่าน ก็ออกมาว่างงานนะ บลาๆ เครียดจนเส้นเลือดจะแตกแล้ววไม่กล้าไปเลย ที่เขาพูดทำให้เรากลัวการเริ่มต้นใหม่มาก กลัวผิดหวังมากเลยค่ะ"
                ]
              }
            ]
          },
          {
            label: "No job",
            children: [
              {
                label: "Can't find a job",
                children: [
                  {
                    label: "Disabled",
                    children: [],
                    isLeaf: true,
                    examples: [
                      "เกิดเป็นคนพิการหางานยากจัง !!อยากตายอะ"
                    ]
                  },
                  {
                    label: "Unqualified",
                    children: [],
                    isLeaf: true,
                    examples: [
                      "ขอวิธีรับมือกับความเสียใจจากการสัมภาษณ์งานไม่ผ่านหน่อยครับ\n\n                                        ผมเป็นนักศึกษาจบใหม่ยื่นสมัครงานบริษัทนึงไป ทำแบบทดสอบแล้ว ถึงเวลาสัมภาษณ์แล้ว เป็นการสัมภาษณ์ครั้งแรกครับ ผมคิดว่าผมทำได้ผมเตรียมตัวมาหนักมากๆครับ ผมแสดงความเป็นตัวเอง พูดลื่นไหลมากครับ พอสัมภาษณ์เสร็จผ่านไป 30 นาทีได้ มีเมลล์บอกว่าผมไม่มีคุณสมบัติ ผมก็ดิ่งผมไม่รู้จะจัดการตัวเองยังไง"
                    ]
                  }
                ]
              },
              {
                label: "Not a field that can work (ได้งานที่ทำไม่ได้)",
                children: [],
                isLeaf: true,
                examples: [
                  "สวัสดีค่ะ เรามีอะไรจะมาปรึกษา ปัจจุบันมีวุฒิ ม.6 เคยทำงานบริษัทสินเชื่อบริษัทนึงมาก่อนได้ปีกว่าๆแล้วตัดสินใจลาออก ตอนทำได้6เดือนได้เงินเดือนเดือนละ 12,000-13,000 บาทยังไม่มีภาระบ้าน พอได้เลื่อนตำแหน่งได้เงินเดือน18,000-20,000 แล้วแต่เดือน เลยตัดสินใจซื้อบ้าน เหตุผลที่ลาออกเนื่องจากเราคิดว่าเราไม่เหมาะกับงานด้านนี้เพราะเราไม่ถนัดทำงานนอกสาขา (บางครั้งต้องออกมาทำตลาดนอกสาขาหาลูกค้าขายสินเชื่อต่างๆ) ตัดสินใจมาสมัครบริษัทสินเชื่ออีกบริษัทนึง สวัสดิการไม่ต่างกันเท่าไหร่แต่ต่างกันที่วันหยุด ที่เก่าหยุดวันอาทิตย์วันเดียว ที่ใหม่หยุดอาทิตย์ละ2วัน แต่เงินเดือน12,000-13,000 เริ่มงานวันที่ 1 พ.ค. แต่ระหว่างนี้ก็ต้องมาอบรมในกรุงเทพที่ไกลบ้านมาก ตื่นเช้าทุกวัน มาอบรมก็ต้องออกค่าใช้จ่ายเอง ตอนนี้เราคิดว่าเรารู้สึกผิดมากที่ออกจากที่เก่ามา เหมือนทิ้งเงินเดือนไปหลายพัน มาสมัครงานใหม่แต่ก็ยังทำงานแบบเดิม แต่บริษัทใหม่ท้อกว่าบริษัทเก่าอีกค่ะ เงินเดือนก็น้อยกว่าแถมเราต้องส่งบ้านอีกเดือนละ 6,300 บาท เครียดมากค่ะ จะหางานใหม่แต่ด้วยที่วุฒิแค่ ม.6 หางานยากมากๆค่ะ 😢"
                ]
              }
            ]
          },
          {
            label: "Compare to other Salary",
            children: [],
            isLeaf: true,
            examples: [
              "ทำไม บริษัท มหาชน ฐานเงินเดือน ให้น้อยจัง ในตำแหน่งเดียวกัน เมื่อเทียบกับบ.อื่นๆ และอีกอย่างก็ทำงาน 6 วันอีก"
            ]
          }
        ]
      },
      {
        label: "sexual harassment",
        children: [],
        isLeaf: true,
        examples: [
          "สวัสดีค่ะตอนนี้เราอายุ20 อยู่คนเดียว แม่เสีย (ส่วนพ่อหย่ากับแม่ตั้งแต่เราเด็กๆ) เคยทำงานมาหลายอาชีพมาก เจอคนหลายแบบ เคยออกจากงานเพราะกลัวผช.ที่ทำงานหลายครั้งมากๆ(เขาชอบชวนคุยเชิง18+เขารู้ที่อยู่เราเราเลยกลัวค่ะตอนเด็กๆเคยโดนข่มขืนเราเลยขี้ระแวงเวลาคนมาคุยเรื่องนี้) เปลี่ยนที่ทำงานบ่อยจนตอนนี้ไม่มีความมั่นใจในการไปสมัครงานที่ใหม่เลย\n                อยากรู้ว่ามีใครเคยเป็นแบบเราไหมคะเวลามั่นใจก็จะมั่นใจแบบสุดโต่งเวลาไม่มั่นใจก็ไม่อยากทำอะไรเลย ไม่กล้าออกจากห้องไปซื้อข้าวยังไม่กล้า บางครั้งก็หูแว่วได้ยินเสียงคนมาคุยค่ะ ถ้าเล่าไม่รู้เรื่องขอโทษด้วยนะคะบางทีเราก็สับสน แค่สงสัยว่าเราไม่ได้เป็นคนเดียวใช่ไหม"
        ]
      }
    ]
  }