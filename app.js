import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <a href="/">
            <img alt="LOGO"
                src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj">
            </img>
        </a>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="navBar">
                <ul>
                    <li>HOME</li>
                    <li>CONTACT</li>
                    <li>ANOUT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "248910",
            "name": "Aryan Family's Delight",
            "uuid": "f24da08e-6a5d-4b1b-9258-e6e195567a98",
            "city": "15",
            "area": "Bhitauli",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "cdy5rmmsdi3yrlivdnjk",
            "cuisines": [
                "Chinese",
                "Continental",
                "Indian"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
                "restaurant": "wok-in-jankipuram-jankipuram",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "Sector 2, Jankipuram Extension Lucknow, Uttar Pradesh 226031",
            "locality": "Jankipuram",
            "parentId": 6001,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "FLAT125 off",
                "shortDescriptionList": [
                    {
                        "meta": "FLAT125 off | Use SNACKSBINGE",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT125 off | Use SNACKSBINGE",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use SNACKSBINGE",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "FLAT125 off | Use SNACKSBINGE",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5772482~p=10~eid=00000185-e3af-e685-059c-b7a700df0a62",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "248910",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 1.2000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "537919",
            "name": "Professor Chai Wala",
            "uuid": "317c21d3-71c0-4987-8d01-c9f31704d0f5",
            "city": "15",
            "area": "Aliganj",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "mwccuvhvb55tkgpvo1wp",
            "cuisines": [
                "Beverages",
                "Fast Food",
                "Snacks"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 0.30000001192092896,
            "slugs": {
                "restaurant": "professor-chai-wala-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "KHASRA NO 1069 ,VILL AHLADPUR,KAMLABAD BARAULI BKT LUCKNOW",
            "locality": "Kamlabad Barauli Bkt",
            "parentId": 323745,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "537919",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 0.30000001192092896,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "590511",
            "name": "Swadishtm Fine Food",
            "uuid": "ddffad01-0527-42bb-93bf-6316c5f073c8",
            "city": "15",
            "area": "Jankipuram Extension",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "afplbmcro4dimsv0qao1",
            "cuisines": [
                "Chinese",
                "Fast Food",
                "Biryani",
                "South Indian"
            ],
            "tags": [

            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 0.30000001192092896,
            "slugs": {
                "restaurant": "swadishtm-fine-food-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "7/604, Sector 7, Jankipuram Extension Via, Railway Crossing, near Bhawani Chauraha, Sector 4, Bhitauli, Lucknow, Uttar Pradesh 226021, India",
            "locality": "Aliganj",
            "parentId": 353171,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "590511",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 0.30000001192092896,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "115729",
            "name": "Shri Surendra Bhojnalay",
            "uuid": "4f7600fb-0271-43f0-b7ad-476bb6bc1746",
            "city": "15",
            "area": "Purania Aliganj",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "oxsneyxxw5rzqdvepg9w",
            "cuisines": [
                "North Indian"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 4.699999809265137,
            "slugs": {
                "restaurant": "shree-surebdra-bhojnalaye-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "Near Vidayachal Mandir Sitapur ROad Aliganj",
            "locality": "Aliganj",
            "parentId": 22479,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5738558~p=4~eid=00000185-e3af-e685-059c-b7a500df0458",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "115729",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 4.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.6",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "634725",
            "name": "Om Shree Ganpati Mishtan Bhandar",
            "uuid": "f33295d7-6d79-48a4-b08a-ac4ca1ed6128",
            "city": "15",
            "area": "Aliganj",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "wtno1sm8fuijws8xlamw",
            "cuisines": [
                "Sweets",
                "Desserts"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 0.20000000298023224,
            "slugs": {
                "restaurant": "om-shree-ganpati-mishtan-bhandar-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "3/1256M, Jankipuram Vistar, Gole Chauraha, Lucknow-226021",
            "locality": "Jankipuram Vistar",
            "parentId": 382733,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "15% off",
                "shortDescriptionList": [
                    {
                        "meta": "15% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "15% off up to ₹45 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "15% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "15% off up to ₹45 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "634725",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 0.20000000298023224,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "467803",
            "name": "ARMAN MURADABADI BIRYANI CORNER",
            "uuid": "840373ee-4989-4b1d-a85e-dfe261ebee7b",
            "city": "15",
            "area": "Aliganj",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "zjniwbzdock4moivwjuq",
            "cuisines": [
                "Biryani"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
                "restaurant": "arman-muradabadi-biryani-corner-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "BHITHAULI KHURD, SITAPUR ROAD, Bhitoli Khurd, Bakshi Ka Talab Tahsil, Lucknow",
            "locality": "Bhitoli Khurd",
            "parentId": 281060,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "467803",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 0.4000000059604645,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "241113",
            "name": "Shri Balaji Ka Dhaba",
            "uuid": "50deb658-8d57-41c6-8374-d43324a29f11",
            "city": "15",
            "area": "Aliganj",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "vmrlv6ucdrxnhuzh8d69",
            "cuisines": [
                "North Indian",
                "Chinese",
                "South Indian"
            ],
            "tags": [

            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 4.699999809265137,
            "slugs": {
                "restaurant": "the-fatty-panda-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "Near Vidayachal Mandir Sitapur ROad Aliganj",
            "locality": "Near Vidayachal Mandir",
            "parentId": 262325,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5738553~p=7~eid=00000185-e3af-e685-059c-b7a600df0721",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "241113",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 4.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.5",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "70124",
            "name": "Food Paradise",
            "uuid": "4a012ffe-05e5-41cb-952b-0abde88ebadc",
            "city": "15",
            "area": "Bhitauli",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "y15jq7kpozto7i4sryrd",
            "cuisines": [
                "North Indian",
                "South Indian"
            ],
            "tags": [

            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 0.800000011920929,
            "slugs": {
                "restaurant": "food-paradise-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "Bhitauli Tiraha, IIM Road, Aliganj, Lucknow",
            "locality": "Jankipuram",
            "parentId": 5250,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "70124",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 0.800000011920929,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "611987",
            "name": "Chai O'Clock",
            "uuid": "a91a8d5c-b321-4e67-8787-2ed718f38f0b",
            "city": "15",
            "area": "Aliganj",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "gzmruky35ruau49l8grs",
            "cuisines": [
                "Chinese",
                "Fast Food",
                "Italian",
                "Snacks"
            ],
            "tags": [

            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 0.6000000238418579,
            "slugs": {
                "restaurant": "chai-o'clock-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "SECTOR- 8/24, JANKIPURAM VISTAR, LUCKNOW",
            "locality": "Jankipuram Vistar",
            "parentId": 387972,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "611987",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 0.6000000238418579,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "345677",
            "name": "NEEL KAMAL VEG FAMILY RESTAURANT",
            "uuid": "05f739f9-87f7-48b6-a138-4c2ac396984c",
            "city": "15",
            "area": "Jankipuram Extension",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "jouray3zqns3kwca2oxa",
            "cuisines": [
                "Indian",
                "Chinese",
                "Snacks"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
                "restaurant": "neel-kamal-veg-family-restaurant-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "4 BY 365, JANKIPURAM VISTAR , JANKIPURAM LUCKNOW, Nagar Nigam Food Safety Zone-9, Lucknow, Uttar Pradesh-226021",
            "locality": "Aliganj",
            "parentId": 145294,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "345677",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 1.2000000476837158,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "464366",
            "name": "Dream Art Cafe",
            "uuid": "b2551f07-fc1f-4d1e-9a36-3863cd1f2a2f",
            "city": "15",
            "area": "Jankipuram",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "qbtr2yj5vwhgom71k3yq",
            "cuisines": [
                "Indian",
                "Chinese",
                "Continental",
                "Pastas"
            ],
            "tags": [

            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "dream-art-cafe-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "h no.3/6 Sector 3 Jankipuram",
            "locality": "Sector 3",
            "parentId": 278954,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "464366",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "314263",
            "name": "Old Al-Baik",
            "uuid": "1b9c3546-e9c0-483c-a9cf-4bf1b4ba7d1e",
            "city": "15",
            "area": "Madiyanva",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "j7ejjdtuqseagtatqcs8",
            "cuisines": [
                "Snacks",
                "Fast Food",
                "Burgers",
                "Continental"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 4.199999809265137,
            "slugs": {
                "restaurant": "old-al-baik-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "643-S/067 Sanskrit Nagaram, Tadikhana, Sitapur Road, Lucknow",
            "locality": "Aliganj",
            "parentId": 11432,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5770756~p=13~eid=00000185-e3af-e685-059c-b7a800df0d44",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "314263",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 4.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.8",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "609348",
            "name": "The Bon Bon Bakers",
            "uuid": "4a55f9bb-5444-4b87-b05d-a41ed11832c3",
            "city": "15",
            "area": "JANKIPURAM",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "0ec0fc07d24120be619efd1fd00d0f25",
            "cuisines": [
                "Bakery",
                "Italian-American",
                "Snacks",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
                "restaurant": "the-bonbon-bakers-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "4/371, JANKIPURAM VISTAAR,  JANKIPURAM, LUCKNOW., Nagar  Nigam Food Safety Zone-9,  Lucknow, Uttar Pradesh, 226021",
            "locality": "Aliganj",
            "parentId": 205683,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 on select items | Use code SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 on select items | Use code SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "609348",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 1.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "493144",
            "name": "LADDOO HOUSE",
            "uuid": "928cc64d-28a7-477b-9525-41dfaaef7ed6",
            "city": "15",
            "area": "Jankipuram",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "l2ox4grhdp7zyxk7eeel",
            "cuisines": [
                "Sweets",
                "Snacks"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
                "restaurant": "ladoo-house-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "CP-02 SECTOR 3 JANKIPURAM VISTAR LUCKNOW  226023",
            "locality": "Aliganj",
            "parentId": 295644,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 1800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 1800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "493144",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 0.699999988079071,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "66673",
            "name": "Mr. Brown",
            "uuid": "8242ad2b-2ea7-4522-ad69-dabe94004a60",
            "city": "15",
            "area": "Aliganj",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "2c469b5d88f84b7495b9825d06e4bb9b",
            "cuisines": [
                "Bakery",
                "Italian",
                "Snacks",
                "Healthy Food",
                "Pizzas",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 4.699999809265137,
            "slugs": {
                "restaurant": "mr-brown-aliganj-aliganj",
                "city": "lucknow"
            },
            "cityState": "15",
            "address": "B 35, Sector P, Aliganj, Lucknow",
            "locality": "Aliganj",
            "parentId": 2262,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5772552~p=16~eid=00000185-e3af-e685-059c-b7a900df1072",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "66673",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 4.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    }
]

const cdnImageId = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCards = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
    // console.log(props)
    return (
        <div className="card">
            <img alt=" Pizza Hut"
                src={cdnImageId + cloudinaryImageId}>
            </img>
            <div className="cardDetails">
                <h2> {name}</h2>
                <p>{cuisines}</p>
                <span>{avgRating}★</span>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            {restaurantList.map((restaurant) => {
                return (<RestaurantCards key={restaurant.data.id} {...restaurant.data} />)
            })}
            {/* <RestaurantCards {...restaurantList[1].data} />
            <RestaurantCards {...restaurantList[2].data} />
            <RestaurantCards {...restaurantList[3].data} />
            <RestaurantCards {...restaurantList[4].data} />
            <RestaurantCards {...restaurantList[5].data} />
            <RestaurantCards {...restaurantList[6].data} />
            <RestaurantCards {...restaurantList[7].data} />
            <RestaurantCards {...restaurantList[8].data} />
            <RestaurantCards {...restaurantList[9].data} />
            <RestaurantCards {...restaurantList[10].data} />
            <RestaurantCards {...restaurantList[11].data} />
            <RestaurantCards {...restaurantList[12].data} />
            <RestaurantCards {...restaurantList[13].data} />
            <RestaurantCards {...restaurantList[14].data} /> */}
        </div>


    )
}

const Footer = () => {
    return (
        <h2>Fotter</h2>
    )
}

/*
***
    <></> this is React.fragment this  is because always JSX takes oly one parent inside it so if we dont want to wrap inside adiv then we use React.fragment
***
*/
function AppLayout() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)