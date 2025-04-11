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
 *     summary: Get a list of all hotels (HTML response)
 *     description: Returns an HTML page via EJS.
 *     responses:
 *       200:
 *         description: HTML content
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: "<!DOCTYPE html></html>"
 */

/**
 * @swagger
 * /api/hotel/{id}:
 *   put:
 *     tags: [Hotel]
 *     summary: Update a hotel by ID
 *     description: Updates the name or hotelChainId of an existing hotel.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The numeric ID of the hotel to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name of the hotel.
 *                 example: Updated Graham Hotel
 *               hotelChainId:
 *                 type: integer
 *                 description: Updated hotel chain ID.
 *                 example: 3
 *     responses:
 *       200:
 *         description: Hotel successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 25
 *                 name:
 *                   type: string
 *                   example: Updated Graham Hotel
 *                 hotelChainId:
 *                   type: integer
 *                   example: 3
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-04-04T15:17:47.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-04-05T10:32:12.000Z"
 */

/**
 * @swagger
 * /api/hotel/{id}:
 *   delete:
 *     tags: [Hotel]
 *     summary: Delete a hotel by ID
 *     description: Permanently removes a hotel from the system using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The numeric ID of the hotel to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hotel successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hotel with ID 25 has been deleted.
 */