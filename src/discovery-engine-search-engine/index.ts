/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DiscoveryEngineSearchEngineConfig extends cdktn.TerraformMetaArguments {
  /**
  * This is the application type this engine resource represents.
  * The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#app_type DiscoveryEngineSearchEngine#app_type}
  */
  readonly appType?: string;
  /**
  * The collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}
  */
  readonly collectionId: string;
  /**
  * The data stores associated with this engine. For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}
  */
  readonly dataStoreIds: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#deletion_policy DiscoveryEngineSearchEngine#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Whether to disable analytics for searches performed on this engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#disable_analytics DiscoveryEngineSearchEngine#disable_analytics}
  */
  readonly disableAnalytics?: boolean | cdktn.IResolvable;
  /**
  * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Unique ID to use for Search Engine App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}
  */
  readonly engineId: string;
  /**
  * A map of the feature config for the engine to opt in or opt out of features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#features DiscoveryEngineSearchEngine#features}
  */
  readonly features?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}
  */
  readonly industryVertical?: string;
  /**
  * The KMS key to be used to protect this Engine at creation time.
  * 
  * Must be set for requests that need to comply with CMEK Org Policy
  * protections.
  * 
  * If this field is set and processed successfully, the Engine will be
  * protected by the KMS key, as indicated in the cmek_config field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#kms_key_name DiscoveryEngineSearchEngine#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}
  */
  readonly project?: string;
  /**
  * common_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}
  */
  readonly commonConfig?: DiscoveryEngineSearchEngineCommonConfig;
  /**
  * knowledge_graph_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#knowledge_graph_config DiscoveryEngineSearchEngine#knowledge_graph_config}
  */
  readonly knowledgeGraphConfig?: DiscoveryEngineSearchEngineKnowledgeGraphConfig;
  /**
  * search_engine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}
  */
  readonly searchEngineConfig: DiscoveryEngineSearchEngineSearchEngineConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}
  */
  readonly timeouts?: DiscoveryEngineSearchEngineTimeouts;
}
export interface DiscoveryEngineSearchEngineCommonConfig {
  /**
  * The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.cd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}
  */
  readonly companyName?: string;
}

export function discoveryEngineSearchEngineCommonConfigToTerraform(struct?: DiscoveryEngineSearchEngineCommonConfigOutputReference | DiscoveryEngineSearchEngineCommonConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_name: cdktn.stringToTerraform(struct!.companyName),
  }
}


export function discoveryEngineSearchEngineCommonConfigToHclTerraform(struct?: DiscoveryEngineSearchEngineCommonConfigOutputReference | DiscoveryEngineSearchEngineCommonConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_name: {
      value: cdktn.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineCommonConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineSearchEngineCommonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineCommonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyName = value.companyName;
    }
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }
}
export interface DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig {
  /**
  * Whether to disable the private KG auto complete for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#disable_private_kg_auto_complete DiscoveryEngineSearchEngine#disable_private_kg_auto_complete}
  */
  readonly disablePrivateKgAutoComplete?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable the private KG enrichment for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#disable_private_kg_enrichment DiscoveryEngineSearchEngine#disable_private_kg_enrichment}
  */
  readonly disablePrivateKgEnrichment?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable the private KG for query UI chips.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_ui_chips DiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}
  */
  readonly disablePrivateKgQueryUiChips?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable the private KG query understanding for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#disable_private_kg_query_understanding DiscoveryEngineSearchEngine#disable_private_kg_query_understanding}
  */
  readonly disablePrivateKgQueryUnderstanding?: boolean | cdktn.IResolvable;
}

export function discoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigToTerraform(struct?: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference | DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_private_kg_auto_complete: cdktn.booleanToTerraform(struct!.disablePrivateKgAutoComplete),
    disable_private_kg_enrichment: cdktn.booleanToTerraform(struct!.disablePrivateKgEnrichment),
    disable_private_kg_query_ui_chips: cdktn.booleanToTerraform(struct!.disablePrivateKgQueryUiChips),
    disable_private_kg_query_understanding: cdktn.booleanToTerraform(struct!.disablePrivateKgQueryUnderstanding),
  }
}


export function discoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigToHclTerraform(struct?: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference | DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_private_kg_auto_complete: {
      value: cdktn.booleanToHclTerraform(struct!.disablePrivateKgAutoComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_private_kg_enrichment: {
      value: cdktn.booleanToHclTerraform(struct!.disablePrivateKgEnrichment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_private_kg_query_ui_chips: {
      value: cdktn.booleanToHclTerraform(struct!.disablePrivateKgQueryUiChips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_private_kg_query_understanding: {
      value: cdktn.booleanToHclTerraform(struct!.disablePrivateKgQueryUnderstanding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePrivateKgAutoComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrivateKgAutoComplete = this._disablePrivateKgAutoComplete;
    }
    if (this._disablePrivateKgEnrichment !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrivateKgEnrichment = this._disablePrivateKgEnrichment;
    }
    if (this._disablePrivateKgQueryUiChips !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrivateKgQueryUiChips = this._disablePrivateKgQueryUiChips;
    }
    if (this._disablePrivateKgQueryUnderstanding !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrivateKgQueryUnderstanding = this._disablePrivateKgQueryUnderstanding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePrivateKgAutoComplete = undefined;
      this._disablePrivateKgEnrichment = undefined;
      this._disablePrivateKgQueryUiChips = undefined;
      this._disablePrivateKgQueryUnderstanding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePrivateKgAutoComplete = value.disablePrivateKgAutoComplete;
      this._disablePrivateKgEnrichment = value.disablePrivateKgEnrichment;
      this._disablePrivateKgQueryUiChips = value.disablePrivateKgQueryUiChips;
      this._disablePrivateKgQueryUnderstanding = value.disablePrivateKgQueryUnderstanding;
    }
  }

  // disable_private_kg_auto_complete - computed: false, optional: true, required: false
  private _disablePrivateKgAutoComplete?: boolean | cdktn.IResolvable; 
  public get disablePrivateKgAutoComplete() {
    return this.getBooleanAttribute('disable_private_kg_auto_complete');
  }
  public set disablePrivateKgAutoComplete(value: boolean | cdktn.IResolvable) {
    this._disablePrivateKgAutoComplete = value;
  }
  public resetDisablePrivateKgAutoComplete() {
    this._disablePrivateKgAutoComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrivateKgAutoCompleteInput() {
    return this._disablePrivateKgAutoComplete;
  }

  // disable_private_kg_enrichment - computed: false, optional: true, required: false
  private _disablePrivateKgEnrichment?: boolean | cdktn.IResolvable; 
  public get disablePrivateKgEnrichment() {
    return this.getBooleanAttribute('disable_private_kg_enrichment');
  }
  public set disablePrivateKgEnrichment(value: boolean | cdktn.IResolvable) {
    this._disablePrivateKgEnrichment = value;
  }
  public resetDisablePrivateKgEnrichment() {
    this._disablePrivateKgEnrichment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrivateKgEnrichmentInput() {
    return this._disablePrivateKgEnrichment;
  }

  // disable_private_kg_query_ui_chips - computed: false, optional: true, required: false
  private _disablePrivateKgQueryUiChips?: boolean | cdktn.IResolvable; 
  public get disablePrivateKgQueryUiChips() {
    return this.getBooleanAttribute('disable_private_kg_query_ui_chips');
  }
  public set disablePrivateKgQueryUiChips(value: boolean | cdktn.IResolvable) {
    this._disablePrivateKgQueryUiChips = value;
  }
  public resetDisablePrivateKgQueryUiChips() {
    this._disablePrivateKgQueryUiChips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrivateKgQueryUiChipsInput() {
    return this._disablePrivateKgQueryUiChips;
  }

  // disable_private_kg_query_understanding - computed: false, optional: true, required: false
  private _disablePrivateKgQueryUnderstanding?: boolean | cdktn.IResolvable; 
  public get disablePrivateKgQueryUnderstanding() {
    return this.getBooleanAttribute('disable_private_kg_query_understanding');
  }
  public set disablePrivateKgQueryUnderstanding(value: boolean | cdktn.IResolvable) {
    this._disablePrivateKgQueryUnderstanding = value;
  }
  public resetDisablePrivateKgQueryUnderstanding() {
    this._disablePrivateKgQueryUnderstanding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrivateKgQueryUnderstandingInput() {
    return this._disablePrivateKgQueryUnderstanding;
  }
}
export interface DiscoveryEngineSearchEngineKnowledgeGraphConfig {
  /**
  * Specify entity types to support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#cloud_knowledge_graph_types DiscoveryEngineSearchEngine#cloud_knowledge_graph_types}
  */
  readonly cloudKnowledgeGraphTypes?: string[];
  /**
  * Whether to enable the Cloud Knowledge Graph for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#enable_cloud_knowledge_graph DiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}
  */
  readonly enableCloudKnowledgeGraph?: boolean | cdktn.IResolvable;
  /**
  * Whether to enable the Private Knowledge Graph for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#enable_private_knowledge_graph DiscoveryEngineSearchEngine#enable_private_knowledge_graph}
  */
  readonly enablePrivateKnowledgeGraph?: boolean | cdktn.IResolvable;
  /**
  * feature_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#feature_config DiscoveryEngineSearchEngine#feature_config}
  */
  readonly featureConfig?: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig;
}

export function discoveryEngineSearchEngineKnowledgeGraphConfigToTerraform(struct?: DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference | DiscoveryEngineSearchEngineKnowledgeGraphConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_knowledge_graph_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cloudKnowledgeGraphTypes),
    enable_cloud_knowledge_graph: cdktn.booleanToTerraform(struct!.enableCloudKnowledgeGraph),
    enable_private_knowledge_graph: cdktn.booleanToTerraform(struct!.enablePrivateKnowledgeGraph),
    feature_config: discoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigToTerraform(struct!.featureConfig),
  }
}


export function discoveryEngineSearchEngineKnowledgeGraphConfigToHclTerraform(struct?: DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference | DiscoveryEngineSearchEngineKnowledgeGraphConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_knowledge_graph_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cloudKnowledgeGraphTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_cloud_knowledge_graph: {
      value: cdktn.booleanToHclTerraform(struct!.enableCloudKnowledgeGraph),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_knowledge_graph: {
      value: cdktn.booleanToHclTerraform(struct!.enablePrivateKnowledgeGraph),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_config: {
      value: discoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigToHclTerraform(struct!.featureConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineSearchEngineKnowledgeGraphConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudKnowledgeGraphTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudKnowledgeGraphTypes = this._cloudKnowledgeGraphTypes;
    }
    if (this._enableCloudKnowledgeGraph !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudKnowledgeGraph = this._enableCloudKnowledgeGraph;
    }
    if (this._enablePrivateKnowledgeGraph !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateKnowledgeGraph = this._enablePrivateKnowledgeGraph;
    }
    if (this._featureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureConfig = this._featureConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineKnowledgeGraphConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudKnowledgeGraphTypes = undefined;
      this._enableCloudKnowledgeGraph = undefined;
      this._enablePrivateKnowledgeGraph = undefined;
      this._featureConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudKnowledgeGraphTypes = value.cloudKnowledgeGraphTypes;
      this._enableCloudKnowledgeGraph = value.enableCloudKnowledgeGraph;
      this._enablePrivateKnowledgeGraph = value.enablePrivateKnowledgeGraph;
      this._featureConfig.internalValue = value.featureConfig;
    }
  }

  // cloud_knowledge_graph_types - computed: true, optional: true, required: false
  private _cloudKnowledgeGraphTypes?: string[]; 
  public get cloudKnowledgeGraphTypes() {
    return this.getListAttribute('cloud_knowledge_graph_types');
  }
  public set cloudKnowledgeGraphTypes(value: string[]) {
    this._cloudKnowledgeGraphTypes = value;
  }
  public resetCloudKnowledgeGraphTypes() {
    this._cloudKnowledgeGraphTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudKnowledgeGraphTypesInput() {
    return this._cloudKnowledgeGraphTypes;
  }

  // enable_cloud_knowledge_graph - computed: true, optional: true, required: false
  private _enableCloudKnowledgeGraph?: boolean | cdktn.IResolvable; 
  public get enableCloudKnowledgeGraph() {
    return this.getBooleanAttribute('enable_cloud_knowledge_graph');
  }
  public set enableCloudKnowledgeGraph(value: boolean | cdktn.IResolvable) {
    this._enableCloudKnowledgeGraph = value;
  }
  public resetEnableCloudKnowledgeGraph() {
    this._enableCloudKnowledgeGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudKnowledgeGraphInput() {
    return this._enableCloudKnowledgeGraph;
  }

  // enable_private_knowledge_graph - computed: true, optional: true, required: false
  private _enablePrivateKnowledgeGraph?: boolean | cdktn.IResolvable; 
  public get enablePrivateKnowledgeGraph() {
    return this.getBooleanAttribute('enable_private_knowledge_graph');
  }
  public set enablePrivateKnowledgeGraph(value: boolean | cdktn.IResolvable) {
    this._enablePrivateKnowledgeGraph = value;
  }
  public resetEnablePrivateKnowledgeGraph() {
    this._enablePrivateKnowledgeGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateKnowledgeGraphInput() {
    return this._enablePrivateKnowledgeGraph;
  }

  // feature_config - computed: false, optional: true, required: false
  private _featureConfig = new DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference(this, "feature_config");
  public get featureConfig() {
    return this._featureConfig;
  }
  public putFeatureConfig(value: DiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig) {
    this._featureConfig.internalValue = value;
  }
  public resetFeatureConfig() {
    this._featureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureConfigInput() {
    return this._featureConfig.internalValue;
  }
}
export interface DiscoveryEngineSearchEngineSearchEngineConfig {
  /**
  * The required subscription tier of this engine.
  * 
  * They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#required_subscription_tier DiscoveryEngineSearchEngine#required_subscription_tier}
  */
  readonly requiredSubscriptionTier?: string;
  /**
  * The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}
  */
  readonly searchAddOns?: string[];
  /**
  * The search feature tier of this engine. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}
  */
  readonly searchTier?: string;
}

export function discoveryEngineSearchEngineSearchEngineConfigToTerraform(struct?: DiscoveryEngineSearchEngineSearchEngineConfigOutputReference | DiscoveryEngineSearchEngineSearchEngineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_subscription_tier: cdktn.stringToTerraform(struct!.requiredSubscriptionTier),
    search_add_ons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.searchAddOns),
    search_tier: cdktn.stringToTerraform(struct!.searchTier),
  }
}


export function discoveryEngineSearchEngineSearchEngineConfigToHclTerraform(struct?: DiscoveryEngineSearchEngineSearchEngineConfigOutputReference | DiscoveryEngineSearchEngineSearchEngineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_subscription_tier: {
      value: cdktn.stringToHclTerraform(struct!.requiredSubscriptionTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_add_ons: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.searchAddOns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_tier: {
      value: cdktn.stringToHclTerraform(struct!.searchTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineSearchEngineConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineSearchEngineSearchEngineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredSubscriptionTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredSubscriptionTier = this._requiredSubscriptionTier;
    }
    if (this._searchAddOns !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAddOns = this._searchAddOns;
    }
    if (this._searchTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTier = this._searchTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineSearchEngineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredSubscriptionTier = undefined;
      this._searchAddOns = undefined;
      this._searchTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredSubscriptionTier = value.requiredSubscriptionTier;
      this._searchAddOns = value.searchAddOns;
      this._searchTier = value.searchTier;
    }
  }

  // required_subscription_tier - computed: true, optional: true, required: false
  private _requiredSubscriptionTier?: string; 
  public get requiredSubscriptionTier() {
    return this.getStringAttribute('required_subscription_tier');
  }
  public set requiredSubscriptionTier(value: string) {
    this._requiredSubscriptionTier = value;
  }
  public resetRequiredSubscriptionTier() {
    this._requiredSubscriptionTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSubscriptionTierInput() {
    return this._requiredSubscriptionTier;
  }

  // search_add_ons - computed: true, optional: true, required: false
  private _searchAddOns?: string[]; 
  public get searchAddOns() {
    return this.getListAttribute('search_add_ons');
  }
  public set searchAddOns(value: string[]) {
    this._searchAddOns = value;
  }
  public resetSearchAddOns() {
    this._searchAddOns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAddOnsInput() {
    return this._searchAddOns;
  }

  // search_tier - computed: false, optional: true, required: false
  private _searchTier?: string; 
  public get searchTier() {
    return this.getStringAttribute('search_tier');
  }
  public set searchTier(value: string) {
    this._searchTier = value;
  }
  public resetSearchTier() {
    this._searchTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTierInput() {
    return this._searchTier;
  }
}
export interface DiscoveryEngineSearchEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}
  */
  readonly update?: string;
}

export function discoveryEngineSearchEngineTimeoutsToTerraform(struct?: DiscoveryEngineSearchEngineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function discoveryEngineSearchEngineTimeoutsToHclTerraform(struct?: DiscoveryEngineSearchEngineTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineSearchEngineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineSearchEngineTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineSearchEngineTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine}
*/
export class DiscoveryEngineSearchEngine extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_search_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineSearchEngine to import
  * @param importFromId The id of the existing DiscoveryEngineSearchEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineSearchEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_search_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineSearchEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineSearchEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_search_engine',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.35.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appType = config.appType;
    this._collectionId = config.collectionId;
    this._dataStoreIds = config.dataStoreIds;
    this._deletionPolicy = config.deletionPolicy;
    this._disableAnalytics = config.disableAnalytics;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._features = config.features;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._kmsKeyName = config.kmsKeyName;
    this._location = config.location;
    this._project = config.project;
    this._commonConfig.internalValue = config.commonConfig;
    this._knowledgeGraphConfig.internalValue = config.knowledgeGraphConfig;
    this._searchEngineConfig.internalValue = config.searchEngineConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_ids - computed: false, optional: false, required: true
  private _dataStoreIds?: string[]; 
  public get dataStoreIds() {
    return this.getListAttribute('data_store_ids');
  }
  public set dataStoreIds(value: string[]) {
    this._dataStoreIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdsInput() {
    return this._dataStoreIds;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // disable_analytics - computed: false, optional: true, required: false
  private _disableAnalytics?: boolean | cdktn.IResolvable; 
  public get disableAnalytics() {
    return this.getBooleanAttribute('disable_analytics');
  }
  public set disableAnalytics(value: boolean | cdktn.IResolvable) {
    this._disableAnalytics = value;
  }
  public resetDisableAnalytics() {
    this._disableAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAnalyticsInput() {
    return this._disableAnalytics;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // features - computed: true, optional: true, required: false
  private _features?: { [key: string]: string }; 
  public get features() {
    return this.getStringMapAttribute('features');
  }
  public set features(value: { [key: string]: string }) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // industry_vertical - computed: false, optional: true, required: false
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  public resetIndustryVertical() {
    this._industryVertical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // common_config - computed: false, optional: true, required: false
  private _commonConfig = new DiscoveryEngineSearchEngineCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }
  public putCommonConfig(value: DiscoveryEngineSearchEngineCommonConfig) {
    this._commonConfig.internalValue = value;
  }
  public resetCommonConfig() {
    this._commonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonConfigInput() {
    return this._commonConfig.internalValue;
  }

  // knowledge_graph_config - computed: false, optional: true, required: false
  private _knowledgeGraphConfig = new DiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference(this, "knowledge_graph_config");
  public get knowledgeGraphConfig() {
    return this._knowledgeGraphConfig;
  }
  public putKnowledgeGraphConfig(value: DiscoveryEngineSearchEngineKnowledgeGraphConfig) {
    this._knowledgeGraphConfig.internalValue = value;
  }
  public resetKnowledgeGraphConfig() {
    this._knowledgeGraphConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeGraphConfigInput() {
    return this._knowledgeGraphConfig.internalValue;
  }

  // search_engine_config - computed: false, optional: false, required: true
  private _searchEngineConfig = new DiscoveryEngineSearchEngineSearchEngineConfigOutputReference(this, "search_engine_config");
  public get searchEngineConfig() {
    return this._searchEngineConfig;
  }
  public putSearchEngineConfig(value: DiscoveryEngineSearchEngineSearchEngineConfig) {
    this._searchEngineConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineConfigInput() {
    return this._searchEngineConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineSearchEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineSearchEngineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_type: cdktn.stringToTerraform(this._appType),
      collection_id: cdktn.stringToTerraform(this._collectionId),
      data_store_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dataStoreIds),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      disable_analytics: cdktn.booleanToTerraform(this._disableAnalytics),
      display_name: cdktn.stringToTerraform(this._displayName),
      engine_id: cdktn.stringToTerraform(this._engineId),
      features: cdktn.hashMapper(cdktn.stringToTerraform)(this._features),
      id: cdktn.stringToTerraform(this._id),
      industry_vertical: cdktn.stringToTerraform(this._industryVertical),
      kms_key_name: cdktn.stringToTerraform(this._kmsKeyName),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      common_config: discoveryEngineSearchEngineCommonConfigToTerraform(this._commonConfig.internalValue),
      knowledge_graph_config: discoveryEngineSearchEngineKnowledgeGraphConfigToTerraform(this._knowledgeGraphConfig.internalValue),
      search_engine_config: discoveryEngineSearchEngineSearchEngineConfigToTerraform(this._searchEngineConfig.internalValue),
      timeouts: discoveryEngineSearchEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_type: {
        value: cdktn.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_id: {
        value: cdktn.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_store_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dataStoreIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_analytics: {
        value: cdktn.booleanToHclTerraform(this._disableAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktn.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._features),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      industry_vertical: {
        value: cdktn.stringToHclTerraform(this._industryVertical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_name: {
        value: cdktn.stringToHclTerraform(this._kmsKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_config: {
        value: discoveryEngineSearchEngineCommonConfigToHclTerraform(this._commonConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineSearchEngineCommonConfigList",
      },
      knowledge_graph_config: {
        value: discoveryEngineSearchEngineKnowledgeGraphConfigToHclTerraform(this._knowledgeGraphConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineSearchEngineKnowledgeGraphConfigList",
      },
      search_engine_config: {
        value: discoveryEngineSearchEngineSearchEngineConfigToHclTerraform(this._searchEngineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineSearchEngineSearchEngineConfigList",
      },
      timeouts: {
        value: discoveryEngineSearchEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineSearchEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
