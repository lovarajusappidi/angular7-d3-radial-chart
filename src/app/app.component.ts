import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular';

  // root = {
  //   modelVersionId: 126,
  //   isRoot: true,
  //   name: '001 DFAST AFS Model',
  //   modelDetails: {
  //     modelOwner: 'Anita Chakravarthy',
  //     currentVersion: '1',
  //     modelStatus: 'In Use',
  //   },
  //   children: [
  //     {
  //       modelVersionId: 132,
  //       name: '001 Validation Test',
  //       type: 'model',
  //       isModelAsInput: true,
  //       children: [
  //         {
  //           modelVersionId: 8,
  //           name: '030. Interest Rates - AAVP',
  //           type: 'model',
  //           isModelAsInput: true,
  //           children: [],
  //           mappedModel: null,
  //           Depth: 1,
  //           modelDetails: {
  //             modelOwner: '',
  //             currentVersion: '0.0',
  //             modelStatus: '',
  //           },
  //         },
  //       ],
  //       mappedModel: null,
  //       Depth: 0,
  //       modelDetails: {
  //         modelOwner: 'admin',
  //         currentVersion: '0.0',
  //         modelStatus: '',
  //       },
  //     },
  //     {
  //       modelVersionId: 136,
  //       name: '002 Validation Test',
  //       type: 'model',
  //       isModelAsInput: true,
  //       children: [
  //         {
  //           modelVersionId: 132,
  //           name: '001 Validation Test',
  //           type: 'model',
  //           isModelAsInput: true,
  //           children: [
  //             {
  //               modelVersionId: 8,
  //               name: '030. Interest Rates - AAVP',
  //               type: 'model',
  //               isModelAsInput: true,
  //               children: [],
  //               mappedModel: null,
  //               Depth: 3,
  //               modelDetails: {
  //                 modelOwner: '',
  //                 currentVersion: '0.0',
  //                 modelStatus: '',
  //               },
  //             },
  //           ],
  //           mappedModel: null,
  //           Depth: 1,
  //           modelDetails: {
  //             modelOwner: 'admin',
  //             currentVersion: '0.0',
  //             modelStatus: '',
  //           },
  //         },
  //       ],
  //       mappedModel: null,
  //       Depth: 0,
  //       modelDetails: {
  //         modelOwner: '',
  //         currentVersion: '3',
  //         modelStatus: '',
  //       },
  //     },
  //   ],
  // };

  root = {
    modelVersionId: 10208,
    isRoot: true,
    name: 'C&I Probability of Default',
    modelDetails: {
      modelOwner: 'Ryan',
      currentVersion: '1.0',
      modelStatus: 'Active',
    },
    children: [
      {
        modelVersionId: 10352,
        name: 'Credit Risk Warehouse',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10115,
            name: 'C&I Risk Rating Scorecard',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10353,
        name: 'Core System',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10127,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10143,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10144,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Jack Gavin',
              currentVersion: '3.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10115,
            name: 'C&I Risk Rating Scorecard',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10450,
        name: 'BLS Macroeconomic Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 223,
        name: 'US Unemployment Rates',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 222,
        name: 'Board of Director Reports',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 1,
            name: 'Financial Crimes and Compliance',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.1',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 1,
            name: 'Financial Crimes and Compliance',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.1',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 36,
            name: 'Liquidity Risk',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 36,
            name: 'Liquidity Risk',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10079,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10121,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10122,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10452,
        name: 'FRED Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 219,
        name: 'Economic Growth Rate',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 11,
            name: 'DFast',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 69,
            name: 'Consumer 1A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 276,
        name: 'Federal Unemployment Rate',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 11,
            name: 'DFast',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 69,
            name: 'Consumer 1A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 299,
        name: 'Corporate Public US',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 18,
            name: 'C&I Challenger',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 69,
            name: 'Consumer 1A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10086,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Jack Gavin',
              currentVersion: '3.1.1',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10362,
        name: 'CEIS Commercial Loan Portfolio Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10364,
        name: 'Financial Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10127,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10143,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10144,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Jack Gavin',
              currentVersion: '3.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10365,
        name: 'FRB Macroeconomic Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10367,
        name: 'Regulatory Call Reports',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10370,
        name: 'Watch lists - External',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 287,
        name: 'Account Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 49,
            name: 'Correspondent Banking',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 48,
            name: 'NORKOM',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 42,
            name: 'Transaction Monitoring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 35,
            name: 'Anti-Money Laundering',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.45',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 1,
            name: 'Financial Crimes and Compliance',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.1',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 47,
            name: 'Activity Seen in Dormant Accounts (AML-ADR)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '3.7',
              modelStatus: 'Retired',
            },
          },
          {
            modelVersionId: 43,
            name: 'Actimize SAM (8)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 40,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 69,
            name: 'Consumer 1A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10076,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10079,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10119,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10121,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10122,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 288,
        name: 'CustomerData',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 11,
            name: 'DFast',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 11,
            name: 'DFast',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 49,
            name: 'Correspondent Banking',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 48,
            name: 'NORKOM',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 42,
            name: 'Transaction Monitoring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 35,
            name: 'Anti-Money Laundering',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.45',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 1,
            name: 'Financial Crimes and Compliance',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.1',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 47,
            name: 'Activity Seen in Dormant Accounts (AML-ADR)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '3.7',
              modelStatus: 'Retired',
            },
          },
          {
            modelVersionId: 43,
            name: 'Actimize SAM (8)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 40,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 18,
            name: 'C&I Challenger',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 69,
            name: 'Consumer 1A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10076,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10079,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10119,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10121,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10122,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 291,
        name: 'SWIFT',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 47,
            name: 'Activity Seen in Dormant Accounts (AML-ADR)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '3.7',
              modelStatus: 'Retired',
            },
          },
          {
            modelVersionId: 40,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10076,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10079,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10119,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10121,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10122,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 30,
            name: 'Residential',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Not a Model',
            },
          },
          {
            modelVersionId: 10146,
            name: 'Residential',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Not a Model',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 283,
        name: 'Quarterly Credit Risk Report',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 11,
            name: 'DFast',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10,
            name: 'ICCAP / Risk Appetite',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 9,
            name: 'Enterprise Stress Testing',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 4,
            name: 'Capital Allocation',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 36,
            name: 'Liquidity Risk',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 36,
            name: 'Liquidity Risk',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10079,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10121,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10122,
            name: 'Balance Sheet Planning',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '2.5.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10350,
        name: 'Budget',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10356,
        name: 'MPS',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10127,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10143,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10144,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Jack Gavin',
              currentVersion: '3.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 281,
        name: '6 Month LIBOR Rate',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 69,
            name: 'Consumer 1A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 282,
        name: '1 Year LIBOR Rate',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 19,
            name: 'Consumer',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 20,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 72,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 71,
            name: 'ALM2',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 70,
            name: 'Consumer 2A',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10087,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10099,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10114,
            name: 'CRE',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '3.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10123,
            name: 'ALM3',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10125,
            name: 'Asset Liability Management (ALM)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 297,
        name: 'OFAC Sanctions Lists',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 47,
            name: 'Activity Seen in Dormant Accounts (AML-ADR)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '3.7',
              modelStatus: 'Retired',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 43,
            name: 'Actimize SAM (8)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 40,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 14,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 52,
            name: 'Beneficiary Structuring',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '5.7',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 62,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10076,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10112,
            name: 'Liquidation Risk Margin',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10119,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 298,
        name: 'PEP Lists',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 47,
            name: 'Activity Seen in Dormant Accounts (AML-ADR)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '3.7',
              modelStatus: 'Retired',
            },
          },
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 40,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10076,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '2.5.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10085,
            name: 'C&I (Public & Private Firms)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: '',
              currentVersion: '3.0.0',
              modelStatus: '',
            },
          },
          {
            modelVersionId: 10119,
            name: 'Know Your Customer / CDD',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.5.6',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10363,
        name: 'Corillian',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10368,
        name: 'SNL Financial',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10127,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10143,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10144,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Jack Gavin',
              currentVersion: '3.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10371,
        name: 'Watchlists - SDN',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10349,
        name: 'Accounting Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10127,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10143,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10144,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Jack Gavin',
              currentVersion: '3.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10351,
        name: 'Core Banking',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10354,
        name: 'G/L Data',
        type: 'input',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10127,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10143,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin',
              currentVersion: '2.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10144,
            name: 'Empyrean AL',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Jack Gavin',
              currentVersion: '3.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10376,
        name: 'Credit Memo',
        type: 'output',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10115,
            name: 'C&I Risk Rating Scorecard',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10377,
        name: 'Quarterly Credit Risk Report',
        type: 'output',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10115,
            name: 'C&I Risk Rating Scorecard',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen,Jack Gavin,Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'In Development',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 302,
        name: 'Alerts',
        type: 'output',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 3,
            name: 'Risk Management',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Karen',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10380,
        name: 'Compliance',
        type: 'output',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 10381,
        name: 'BSA/AML Compliance',
        type: 'output',
        isModelAsInput: false,
        children: [],
        mappedModel: [
          {
            modelVersionId: 43,
            name: 'Actimize SAM (8)',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Andy McCreight',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
          {
            modelVersionId: 10208,
            name: 'C&I Probability of Default',
            type: null,
            isModelAsInput: false,
            children: null,
            mappedModel: null,
            Depth: 0,
            modelDetails: {
              modelOwner: 'Ryan',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        Depth: 0,
        modelDetails: null,
      },
      {
        modelVersionId: 19,
        name: 'Consumer',
        type: 'model',
        isModelAsInput: true,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: 'Andy McCreight,Samantha Stang',
          currentVersion: '1.0',
          modelStatus: 'Active',
        },
      },
      {
        modelVersionId: 35,
        name: 'Anti-Money Laundering',
        type: 'model',
        isModelAsInput: true,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: 'Karen',
          currentVersion: '1.45',
          modelStatus: 'In Development',
        },
      },
      {
        modelVersionId: 10084,
        name: 'Economic Capital',
        type: 'model',
        isModelAsInput: true,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: 'Andy McCreight',
          currentVersion: '2.0',
          modelStatus: 'Active',
        },
      },
      {
        modelVersionId: 10086,
        name: 'C&I (Public & Private Firms)',
        type: 'model',
        isModelAsInput: true,
        children: [
          {
            modelVersionId: 8,
            name: 'Operational',
            type: 'model',
            isModelAsInput: true,
            children: [],
            mappedModel: null,
            Depth: 1,
            modelDetails: {
              modelOwner: 'Andy McCreight,Samantha Stang',
              currentVersion: '1.0',
              modelStatus: 'Active',
            },
          },
        ],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: 'Andy McCreight,Jack Gavin',
          currentVersion: '3.1.1',
          modelStatus: '',
        },
      },
      {
        modelVersionId: 10114,
        name: 'CRE',
        type: 'model',
        isModelAsInput: true,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: 'Andy McCreight,Samantha Stang',
          currentVersion: '3.0',
          modelStatus: '',
        },
      },
      {
        modelVersionId: 10174,
        name: 'CECL',
        type: 'model',
        isModelAsInput: true,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: '',
          currentVersion: '1.0',
          modelStatus: '',
        },
      },
      {
        modelVersionId: 10205,
        name: 'Annual Budget',
        type: 'model',
        isModelAsInput: true,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: '',
          currentVersion: '2.0',
          modelStatus: 'Active',
        },
      },
      {
        modelVersionId: 10175,
        name: 'Stress Testing',
        type: 'model',
        isModelAsInput: false,
        children: [],
        mappedModel: null,
        Depth: 0,
        modelDetails: {
          modelOwner: '',
          currentVersion: '1.0',
          modelStatus: '',
        },
      },
    ],
  };

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createRadialTree(this.root);
  }

  createRadialTree(input) {
    let height = 1000;
    let width = 1000;

    let zoom = d3
      .zoom()
      .scaleExtent([0.1, 100])
      .on('zoom', () => {
        // svg
        //   .select('#links')
        //   .attr(
        //     'transform',
        //     'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')'
        //   );
        // svg
        //   .select('#nodes')
        //   .attr(
        //     'transform',
        //     'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')'
        //   );
      });

    let svg = d3
      .select('#chart')
      .append('svg')
      .call(zoom)
      .attr('width', '100%')
      .attr('height', height);

    let diameter = height * 0.75;
    let radius = diameter / 2;

    let tree = d3
      .tree()
      .size([2 * Math.PI, radius])
      .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
      });

    let data = d3.hierarchy(input);
    let treeData = tree(data);

    svg
      .append('defs')
      .selectAll('marker')
      .data(['input', 'output', 'model'])
      .enter()
      .append('marker')
      .attr('id', function (d) {
        return d;
      })
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', -0.9)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('markerunits', 'userSpaceOnUse')
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5') //M0,0 V4 L5,2 Z10")M0,-5L10,0L0,5 L10,0 L0, -5
      .attr('class', function (d) {
        return d;
      })
      .style('opacity', '0.9');

    let links = svg
      .append('g')
      .attr('id', 'links')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .selectAll('.link')
      .data(treeData.links())
      .join('path')
      .attr(
        'd',
        d3
          .linkRadial()
          .angle((d) => d.x)
          .radius((d) => d.y)
      );

    links.attr('class', (d) => {
      if (d.target) {
        if (d.target.data.type === 'input') {
          return 'link input';
        } else if (d.target.data.type === 'output') {
          return 'link output';
        } else {
          return 'link model';
        }
      } else {
        return 'link';
      }
    });

    links
      .on('mouseover', (event, d) => {
        if (event && event.target) {
          event.target.classList.add('treeArcHighlight');
        }
      })
      .on('mouseout', (event, d) => {
        if (event && event.target) {
          event.target.classList.remove('treeArcHighlight');
        }
      });

    let nodes = svg
      .append('g')
      .attr('id', 'nodes')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .selectAll('.node')
      .data(treeData.descendants())
      .join('g')
      .attr('class', 'node')
      .attr('transform', function (d) {
        return `rotate(${(d.x * 180) / Math.PI - 90})` + `translate(${d.y}, 0)`;
      });

    nodes
      .append('circle')
      .attr('r', 6)
      .attr('class', (d) => {
        if (d.data.isRoot) {
          return 'default';
        } else if (d.data.type == 'input') {
          return 'input';
        } else if (d.data.type == 'output') {
          return 'output';
        } else {
          return 'model';
        }
      })
      .style('fill', (d) => {
        if (d.data.isRoot) {
          return '#004691';
        } else if (d.data.type == 'input') {
          return '#a0a0a0';
        } else if (d.data.type == 'output') {
          return '#6699cc';
        } else {
          return '#fdb913';
        }
      });

    nodes
      .append('text')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('dx', function (d) {
        return d.x < Math.PI ? 8 : -8;
      })
      .attr('dy', '.31em')
      .attr('text-anchor', (d) => {
        return d.x < Math.PI ? 'start' : 'end';
      })
      .attr('transform', (d) => {
        return d.x < Math.PI ? null : 'rotate(180)';
      })
      .text((d) => {
        return d.data.name;
      });

    nodes
      .on('mouseover', (event, d) => {
        if (
          event &&
          event.target &&
          event.target.parentNode &&
          event.target.parentNode.children
        ) {
          for (let item of event.target.parentNode.children) {
            if (item.nodeName == 'circle') {
              item.setAttribute('r', '15');
            }
            if (item.nodeName == 'text') {
              item.classList.add('nodeTextHighlight');
              item.classList.add('glow');
            }
          }
        }
        // scope.flag = false;
        // scope.setNewRootData = d;
        // if (d.type == 'input' || d.type == 'output' || d.isRoot) {
        //   $('.visual-dd').attr('style', 'display:none;');
        // } else {
        //   $('.visual-dd').attr(
        //     'style',
        //     'display:block; position:absolute; background:transparent; padding-top:0; width:' +
        //       125 +
        //       'px; height:' +
        //       this.getBoundingClientRect().height +
        //       'px; z-index:20000; top:' +
        //       (this.getBoundingClientRect().top - 95) +
        //       'px; left:' +
        //       (this.getBoundingClientRect().left +
        //         this.getBoundingClientRect().width -
        //         173) +
        //       'px'
        //   );
        //   scope.setDropdown = this.getBoundingClientRect();
        // }
        // var getMapped: any = [];
        // var getData = function () {
        //   if (d.modelDetails == null && d.mappedModel != null) {
        //     d.mappedModel.forEach(function (item) {
        //       getMapped.push(item.name);
        //     });
        //     getMapped = getMapped.toString().replace(/,/gi, ', ');
        //     getMapped = '<b>Models Mapped :</b></br>' + getMapped;
        //   } else {
        //     var getDetails =
        //       '<b>Model Owner : </b> &nbsp;  &nbsp; ' +
        //       d.modelDetails.modelOwner;
        //     getDetails +=
        //       '</br><b>Model Current Version : </b> &nbsp;  &nbsp; ' +
        //       d.modelDetails.currentVersion;
        //     getDetails +=
        //       '</br><b>Model Status : </b> &nbsp;  &nbsp; ' +
        //       d.modelDetails.modelStatus;
        //     getMapped = [];
        //     getMapped.push(getDetails);
        //   }
        //   return getMapped.toString();
        // };
        // setNodeHighlight(d);
        // var div;
        // if (d != undefined) {
        //   if (!d3.select('#dvTooltip').empty()) {
        //     div = d3
        //       .select('#dvTooltip')
        //       .html(
        //         '<div class="viz-modal-header viz-function-bar">' +
        //           d.name +
        //           '</div><div class="viz-function-content">' +
        //           getData() +
        //           '</div>'
        //       )
        //       .style(
        //         'left',
        //         this.getBoundingClientRect().left +
        //           this.getBoundingClientRect().width -
        //           205 +
        //           'px'
        //       )
        //       .style('width', '190px')
        //       .style('height', '85px')
        //       .style('overflow', 'auto')
        //       .style('top', this.getBoundingClientRect().top - 85 + 'px');
        //   } else {
        //     div = d3
        //       .select('body')
        //       .append('div')
        //       .attr('class', 'tooltipd3')
        //       .attr('id', 'dvTooltip')
        //       .html(
        //         '<div class="viz-modal-header viz-function-bar">' +
        //           d.name +
        //           '</div><div class="viz-function-content">' +
        //           getData() +
        //           '</div>'
        //       )
        //       .style(
        //         'left',
        //         this.getBoundingClientRect().left +
        //           this.getBoundingClientRect().width -
        //           205 +
        //           'px'
        //       )
        //       .style('top', this.getBoundingClientRect().top - 85 + 'px')
        //       .style('width', '190px')
        //       .style('overflow', 'auto')
        //       .style('height', '85px')
        //       .on('mouseover', function (d) {
        //         d3.select('#dvTooltip')
        //           .transition()
        //           .duration(0)
        //           .style('width', '190px')
        //           .style('overflow', 'auto')
        //           .style('height', '85px');
        //       })
        //       .on('mouseout', function (d) {
        //         d3.select('#dvTooltip').remove();
        //       });
        //   }
        // }
      })
      .on('mouseout', function (event, d) {
        if (
          event &&
          event.target &&
          event.target.parentNode &&
          event.target.parentNode.children
        ) {
          for (let item of event.target.parentNode.children) {
            if (item.nodeName == 'circle') {
              item.setAttribute('r', '6');
            }
            if (item.nodeName == 'text') {
              item.classList.remove('nodeTextHighlight');
              item.classList.remove('glow');
            }
          }
        }
        // if (!d3.select('#dvTooltip').empty()) {
        //   d3.select('#dvTooltip').transition().remove();
        // }
        // removeNodeHighlight();
      });
  }

  // zoomed() {
  //   $('.visual-dd').attr('style', 'display:none;');
  //   scope.flag = false;
  //   svg
  //     .select('#links')
  //     .attr(
  //       'transform',
  //       'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')'
  //     );
  //   svg
  //     .select('#nodes')
  //     .attr(
  //       'transform',
  //       'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')'
  //     );
  // }
}
