//Problem-1: Convert Seer to Mon
function seerToMon(seer) {
  if (seer <= 0) {
    return "Sorry! I can't Convert";
  }
  let mon = seer / 40;
  return mon;
}
const resultOfMon = seerToMon(120);
console.log(resultOfMon);

// //Problem-2: Total selling
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
  if (shirtQuantity <= 0 || pantQuantity <= 0 || shoeQuantity <= 0) {
    return "Tomar Kena Lagbe Na Vai!";
  }
  const shirtTotalPrice = 100 * shirtQuantity;
  const pantTotalPrice = 200 * pantQuantity;
  const shoeTotalPrice = 500 * shoeQuantity;
  const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
  return totalPrice;
}
const totalSellingPrice = totalSales(3, 5, 2);
console.log(totalSellingPrice);
//problem-3: Delivery Total Cost
function deliveryCost(totalDelivery) {
  if (totalDelivery <= 0) {
    return "Are you kidding me?";
  } else if (totalDelivery <= 100) {
    const delivery = totalDelivery * 100;
    return delivery;
  } else if (totalDelivery <= 200) {
    const firstLotDelivery = 100 * 100;
    const restDelivery = totalDelivery - 100;
    const secondLotDelivery = restDelivery * 80;
    const totalLotDelivery = firstLotDelivery + secondLotDelivery;
    return totalLotDelivery;
  } else {
    const firstLotDelivery = 100 * 100;
    const secondLotDelivery = 100 * 80;
    const nextRestLotDelivery = totalDelivery - 200;
    const thirdLotDelivery = nextRestLotDelivery * 50;
    const nextTotalLotDelivery =
      firstLotDelivery + secondLotDelivery + thirdLotDelivery;
    return nextTotalLotDelivery;
  }
}
const totalDeliverCost = deliveryCost(250);
console.log(totalDeliverCost);

//problem-4:Perfect Friend 5 Character string name print
const friendsName = [
  "Anik",
  "Nusrat",
  "Shumona",
  "Tanni",
  "Saika",
  "Rakib",
  "Talha",
];
function perfectFriend(friend) {
  let firstFiveCharName = friendsName[0];
  for (let i = 0; i < friendsName.length; i++) {
    let element = friendsName[i];
    if (element.length == 5) {
      firstFiveCharName = element;
      break;
    }
  }
  return firstFiveCharName;
}
const finalFriendsName = perfectFriend(friendsName);
console.log(finalFriendsName);
