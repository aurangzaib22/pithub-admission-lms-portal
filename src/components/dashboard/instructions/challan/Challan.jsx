import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { styles } from "./Styles";

const Challan = () => {
  return (
    <Document
      title="Application Processing Fee"
      author="PAKISTAN - ITHUB"
      subject="Challan"
      creator="PAKISTAN - ITHUB"
      producer="PAKISTAN - ITHUB"
    >
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Challan;
