import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Svg,
  Path,
} from "@react-pdf/renderer";
import { format, addDays } from "date-fns";
import logo from "../../assets/graphics/garagelogo.jpeg";

// Colors
const COLORS = {
  primary: "#D30000", // Bright Red
  dark: "#1A1A1A", // Deep Black
  text: "#333333", // Dark Gray text
  gray: "#666666",
  lightGray: "#F3F4F6",
  white: "#FFFFFF",
  accent: "#FFC107", // Gold/Yellow
  headerBg: "#F9FAFB",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: COLORS.text,
    backgroundColor: "#FFFFFF",
    paddingBottom: 60,
  },
  // Header
  headerContainer: {
    flexDirection: "row",
    height: 140,
    marginBottom: 20,
  },
  headerLeft: {
    width: "40%",
    paddingTop: 40,
    paddingLeft: 40,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    objectFit: "contain",
  },
  companyInfo: {
    marginTop: 5,
  },
  slogan: {
    color: COLORS.primary,
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 4,
    letterSpacing: 2,
  },
  contactText: {
    fontSize: 9,
    color: COLORS.gray,
    marginBottom: 2,
  },

  // Right Header Visuals
  headerRight: {
    width: "60%",
    height: "100%",
    position: "relative",
  },
  invoiceTitleBlock: {
    position: "absolute",
    top: 50,
    right: 40,
    alignItems: "flex-end",
  },
  invoiceTitleLarge: {
    fontSize: 36,
    fontWeight: "black",
    color: COLORS.white,
    letterSpacing: 3,
    marginBottom: 5,
  },
  invoiceMetadata: {
    flexDirection: "row",
    gap: 20,
  },
  metaItem: {
    alignItems: "flex-end",
  },
  metaLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 7,
    textTransform: "uppercase",
    marginBottom: 2,
    letterSpacing: 1,
  },
  metaValue: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "bold",
  },

  // Customer Section
  customerSection: {
    flexDirection: "row",
    marginHorizontal: 40,
    marginBottom: 30,
    gap: 30,
  },
  customerCol: {
    flex: 1,
    backgroundColor: COLORS.headerBg,
    padding: 15,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
  },
  sectionLabel: {
    fontSize: 7,
    color: COLORS.gray,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 6,
    letterSpacing: 1,
  },
  clientName: {
    fontSize: 11,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 2,
  },
  clientDetail: {
    fontSize: 9,
    color: COLORS.text,
    marginBottom: 1,
  },

  // Table
  tableContainer: {
    marginHorizontal: 40,
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.dark,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  th: {
    color: COLORS.white,
    fontSize: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    paddingVertical: 12,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  td: {
    fontSize: 9,
    color: COLORS.text,
  },
  // Column Widths
  col1: {
    width: "8%",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.1)",
  }, // No
  col2: {
    width: "47%",
    paddingLeft: 10,
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.1)",
  }, // Description
  col3: {
    width: "10%",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.1)",
  }, // Qty
  col4: {
    width: "17%",
    textAlign: "right",
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.1)",
  }, // Unit Price
  col5: { width: "18%", textAlign: "right", paddingRight: 15 }, // Total

  // Financials
  financialsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 40,
    marginTop: 10,
  },
  financialsBox: {
    width: "45%",
  },
  financialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  financialLabel: {
    fontSize: 9,
    color: COLORS.gray,
  },
  financialValue: {
    fontSize: 9,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.dark,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: COLORS.white,
    textTransform: "uppercase",
  },
  totalValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.white,
  },

  // Footer & Notes
  footerSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  notesContainer: {
    marginHorizontal: 40,
    marginBottom: 60, // push up above red footer
  },
  notesTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  notesText: {
    fontSize: 7,
    color: COLORS.gray,
    lineHeight: 1.5,
  },
});

const QuotePDF = ({ quote, business }) => {
  const laborCharge = quote.laborCharge || 0;
  const discount = quote.discount || 0;

  // Calculate subtotal for quote (Items only)
  // Logic: Sum(Qty * UnitPrice)
  // Unlike Invoice, we might not need to back-calculate if the data structure is simple,
  // but to be safe and consistent, we can use the items array.
  const subTotal = quote.items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );

  // Quote totals usually follow: Subtotal + Labor - Discount + VAT = Total
  // Using the values directly from the quote object or calculating if needed.
  // The backend likely provides 'totalAmount'.
  const taxAmount = quote.taxAmount || 0;
  const totalAmount = quote.totalAmount || 0;

  const validUntil = quote.validUntil
    ? new Date(quote.validUntil)
    : addDays(new Date(quote.createdAt), 14);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* === HEADER BACKGROUND === */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 160,
          }}
        >
          <Svg
            height="100%"
            width="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Base Dark Shape */}
            <Path d="M0,0 L100,0 L100,85 L0,85 Z" fill={COLORS.dark} />
            {/* White overlay for content area */}
            <Path d="M0,0 L35,0 L50,100 L0,100 Z" fill={COLORS.white} />
            {/* Accent Red Strip */}
            <Path d="M100,0 L100,100 L97,100 L97,0 Z" fill={COLORS.primary} />
          </Svg>
        </View>

        {/* === HEADER CONTENT === */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Image src={quote.companySnapshot?.logo || logo} style={styles.logo} />
            <Text style={styles.slogan}>{quote.companySnapshot?.name || "Ruiru Auto Garage"}</Text>
            <Text style={styles.contactText}>
              {quote.companySnapshot?.phone || business?.phone || "0748 333 555"}
            </Text>
            <Text style={styles.contactText}>
              {quote.companySnapshot?.email || business?.email || "info@ruiruautogarage.com"}
            </Text>
          </View>

          <View style={styles.headerRight}>
            <View style={styles.invoiceTitleBlock}>
              <Text style={styles.invoiceTitleLarge}>QUOTE</Text>
              <View style={styles.invoiceMetadata}>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Quote No</Text>
                  <Text style={styles.metaValue}>{quote.quoteNumber}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Date Issued</Text>
                  <Text style={styles.metaValue}>
                    {format(new Date(quote.createdAt), "MMM dd, yyyy")}
                  </Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaLabel}>Valid Until</Text>
                  <Text style={styles.metaValue}>
                    {format(validUntil, "MMM dd, yyyy")}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* === CUSTOMER DETAILS === */}
        <View style={styles.customerSection}>
          <View style={styles.customerCol}>
            <Text style={styles.sectionLabel}>Quoted For</Text>
            <Text style={styles.clientName}>
              {quote.clientId
                ? `${quote.clientId.firstName} ${quote.clientId.lastName}`
                : quote.clientSnapshot?.name || "Walk-In Client"}
            </Text>
            <Text style={styles.clientDetail}>
              {quote.clientId?.email || quote.clientSnapshot?.email}
            </Text>
            <Text style={styles.clientDetail}>
              {quote.clientId?.phone || quote.clientSnapshot?.phone}
            </Text>
          </View>

          <View style={styles.customerCol}>
            <Text style={styles.sectionLabel}>Vehicle Details</Text>
            {quote.vehicle ? (
              <>
                <Text style={[styles.clientName, { fontSize: 11 }]}>
                  {quote.vehicle.make} {quote.vehicle.model}
                </Text>
                <Text style={styles.clientDetail}>
                  REG: {quote.vehicle.registration}
                </Text>
              </>
            ) : (
              <Text
                style={[
                  styles.clientDetail,
                  { fontStyle: "italic", color: COLORS.gray },
                ]}
              >
                No vehicle specified
              </Text>
            )}
          </View>
        </View>

        {/* === TABLE === */}
        <View style={styles.tableContainer}>
          {/* Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.th, styles.col1]}>#</Text>
            <Text style={[styles.th, styles.col2]}>Item Description</Text>
            <Text style={[styles.th, styles.col3]}>Qty</Text>
            <Text style={[styles.th, styles.col4]}>Unit Price</Text>
            <Text
              style={[
                styles.th,
                styles.col5,
                { textAlign: "right", paddingRight: 10 },
              ]}
            >
              Total
            </Text>
          </View>

          {/* Rows */}
          {quote.items?.map((item, idx) => (
            <View
              key={idx}
              style={[
                styles.tableRow,
                { backgroundColor: idx % 2 !== 0 ? "#FAFAFA" : "white" },
              ]}
            >
              <Text style={[styles.td, styles.col1, { borderRight: 0 }]}>
                {idx + 1}
              </Text>
              <Text style={[styles.td, styles.col2, { borderRight: 0 }]}>
                {item.description}
              </Text>
              <Text style={[styles.td, styles.col3, { borderRight: 0 }]}>
                {item.quantity}
              </Text>
              <Text style={[styles.td, styles.col4, { borderRight: 0 }]}>
                {item.unitPrice?.toLocaleString()}
              </Text>
              <Text style={[styles.td, styles.col5, { fontWeight: "bold" }]}>
                {(item.quantity * item.unitPrice)?.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* === FINANCIALS === */}
        <View style={styles.financialsContainer}>
          <View style={styles.financialsBox}>
            <View style={styles.financialRow}>
              <Text style={styles.financialLabel}>Subtotal</Text>
              <Text style={styles.financialValue}>
                KES {subTotal.toLocaleString()}
              </Text>
            </View>

            {laborCharge > 0 && (
              <View style={styles.financialRow}>
                <Text style={styles.financialLabel}>Labor Charge</Text>
                <Text style={styles.financialValue}>
                  KES {laborCharge.toLocaleString()}
                </Text>
              </View>
            )}

            {discount > 0 && (
              <View style={styles.financialRow}>
                <Text
                  style={[styles.financialLabel, { color: COLORS.primary }]}
                >
                  Discount
                </Text>
                <Text
                  style={[styles.financialValue, { color: COLORS.primary }]}
                >
                  - KES {discount.toLocaleString()}
                </Text>
              </View>
            )}

            {taxAmount > 0 && (
              <View style={styles.financialRow}>
                <Text style={styles.financialLabel}>VAT (Inclusive)</Text>
                <Text style={styles.financialValue}>
                  KES {taxAmount.toLocaleString()}
                </Text>
              </View>
            )}

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Estimate Total</Text>
              <Text style={styles.totalValue}>
                KES {totalAmount.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        {/* === FOOTER === */}
        <View style={styles.footerSection}>
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>TERMS & CONDITIONS</Text>
            <Text style={styles.notesText}>
              This quote is valid until {format(validUntil, "dd/MM/yyyy")}.
            </Text>
            <Text style={styles.notesText}>
              Prices are subject to change after the validity period.
            </Text>
            <Text style={styles.notesText}>
              This is an estimate and not a final invoice. Final costs may vary
              based on actual work required.
            </Text>
          </View>

          <View style={{ height: 25, flexDirection: "row" }}>
            <View
              style={{
                width: "40%",
                backgroundColor: COLORS.primary,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 7,
                  textTransform: "uppercase",
                }}
              >
                {quote.companySnapshot?.address?.city 
                  ? `${quote.companySnapshot.address.street || ''}, ${quote.companySnapshot.address.city}` 
                  : "RUIRU TOWN, ALONG MATHIG ROAD"}
              </Text>
            </View>
            <View
              style={{
                width: "60%",
                backgroundColor: COLORS.dark,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 8,
                  textTransform: "uppercase",
                }}
              >
                WWW.RUIRUAUTOGARAGE.COM
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default QuotePDF;
