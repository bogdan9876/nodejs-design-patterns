/**
 * @swagger
 * tags:
 *   name: Hotel
 *   description: Hotel management operations
 */

/**
 * @swagger
 * /api/hotel:
 *   post:
 *     tags: [Hotel]
 *     summary: Create a new hotel
 *     description: Adds a new hotel to the system with a name and associated hotel chain ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the hotel.
 *                 example: Leanne Graham Hotel
 *               hotelChainId:
 *                 type: string
 *                 description: The ID of the hotel chain this hotel belongs to.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Hotel successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique identifier of the hotel.
 *                   example: 52
 *                 name:
 *                   type: string
 *                   description: The name of the hotel.
 *                   example: Leanne Graham Hotel
 *                 hotelChainId:
 *                   type: integer
 *                   description: The ID of the associated hotel chain.
 *                   example: 1
 */


/**
 * @swagger
 * /api/hotel/{id}:
 *   get:
 *     tags: [Hotel]
 *     summary: Get hotel details by ID
 *     description: Retrieves detailed information about a hotel by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The numeric ID of the hotel to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detailed hotel information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique identifier of the hotel.
 *                   example: 25
 *                 name:
 *                   type: string
 *                   description: Name of the hotel.
 *                   example: Leanne Graham Hotel
 *                 hotelChainId:
 *                   type: integer
 *                   description: ID of the hotel chain.
 *                   example: 2
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Timestamp when the hotel was created.
 *                   example: "2025-04-04T15:17:47.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Timestamp of the last update.
 *                   example: "2025-04-04T15:17:47.000Z"
 *                 location:
 *                   type: object
 *                   description: Location details of the hotel.
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 25
 *                     address:
 *                       type: string
 *                       example: Street 25
 *                     city:
 *                       type: string
 *                       example: City_25
 *                     country:
 *                       type: string
 *                       example: Country_25
 *                     hotelId:
 *                       type: integer
 *                       example: 25
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-04T15:17:47.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-04-04T15:17:47.000Z"
 *                 rooms:
 *                   type: array
 *                   description: List of rooms available in the hotel.
 *                   items:
 *                     type: object
 *                   example: []
 */

/**
 * @swagger
 * /api/hotel:
 *   get:
 *     tags: [Hotel]
 *     summary: Get a list of all hotels
 *     description: Retrieves a list of all hotels currently available in the system.
 *     responses:
 *       200:
 *         description: List of hotels
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   description: Array of hotel objects.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 12
 *                       name:
 *                         type: string
 *                         example: Ocean View Resort
 *                       hotelChainId:
 *                         type: string
 *                         example: "3"
 */