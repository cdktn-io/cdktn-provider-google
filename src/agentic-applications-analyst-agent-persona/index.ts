/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AgenticApplicationsAnalystAgentPersonaConfig extends cdktn.TerraformMetaArguments {
  /**
  * Id of the requesting object
  * If auto-generating Id server-side, remove this field and
  * analyst_agent_persona_id from the method_signature of Create RPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#analyst_agent_persona_id AgenticApplicationsAnalystAgentPersona#analyst_agent_persona_id}
  */
  readonly analystAgentPersonaId: string;
  /**
  * The customer-specific context to be used by the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#customer_context AgenticApplicationsAnalystAgentPersona#customer_context}
  */
  readonly customerContext?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#deletion_policy AgenticApplicationsAnalystAgentPersona#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the persona, shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_description AgenticApplicationsAnalystAgentPersona#display_description}
  */
  readonly displayDescription?: string;
  /**
  * The display name of the persona, shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_name AgenticApplicationsAnalystAgentPersona#display_name}
  */
  readonly displayName: string;
  /**
  * The Gemini Enterprise Engine ID associated with this persona.
  * If set, any requests coming from this GE Engine will be routed to this
  * persona.
  * If not set, requests from GE will only be routed to this persona if its
  * name ends in "/default".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#gemini_enterprise_engine AgenticApplicationsAnalystAgentPersona#gemini_enterprise_engine}
  */
  readonly geminiEnterpriseEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#id AgenticApplicationsAnalystAgentPersona#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#location AgenticApplicationsAnalystAgentPersona#location}
  */
  readonly location: string;
  /**
  * The description of the persona review, used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#model_description AgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#project AgenticApplicationsAnalystAgentPersona#project}
  */
  readonly project?: string;
  /**
  * Possible values:
  * ANALYST_ROLE_GENERIC_FINANCE_ANALYST
  * ANALYST_ROLE_CORPORATE_FINANCE_ANALYST
  * ANALYST_ROLE_CROSS_ASSET_DERIVATIVES_STRATEGIST
  * ANALYST_ROLE_KYC_ANALYST
  * ANALYST_ROLE_SALES_TRADER
  * ANALYST_ROLE_QUANT_ANALYST
  * ANALYST_ROLE_EXCHANGE_MANAGER
  * ANALYST_ROLE_PORTFOLIO_MANAGER
  * ANALYST_ROLE_WEALTH_MANAGER
  * ANALYST_ROLE_INSTITUTIONAL_PORTFOLIO_STRATEGIST
  * ANALYST_ROLE_MNA_EXECUTION_ANALYST
  * ANALYST_ROLE_ECM_ORIGINATION_STRATEGIST
  * ANALYST_ROLE_LEVERAGED_FINANCE_SPECIALIST
  * ANALYST_ROLE_INVESTMENT_RESEARCH_ANALYST
  * ANALYST_ROLE_CORPORATE_BANKING_ANALYST
  * ANALYST_ROLE_CREDIT_RISK_STRATEGIST
  * ANALYST_ROLE_BEHAVIORAL_FINANCIAL_STRATEGIST
  * ANALYST_ROLE_FUND_ACCOUNTANT
  * ANALYST_ROLE_MODEL_VALIDATION_AUDITOR
  * ANALYST_ROLE_PRIVATE_EQUITY_SPECIALIST
  * ANALYST_ROLE_TREASURY_ANALYST
  * ANALYST_ROLE_VENTURE_CAPITAL_ANALYST
  * ANALYST_ROLE_AML_INVESTIGATOR
  * ANALYST_ROLE_DUE_DILIGENCE_ANALYST
  * ANALYST_ROLE_INSURANCE_CLAIMS_ANALYST
  * ANALYST_ROLE_SPECIALTY_LIABILITY_UNDERWRITER
  * ANALYST_ROLE_CATASTROPHE_EXPOSURE_MODELER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#role AgenticApplicationsAnalystAgentPersona#role}
  */
  readonly role?: string;
  /**
  * artifact_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#artifact_examples AgenticApplicationsAnalystAgentPersona#artifact_examples}
  */
  readonly artifactExamples?: AgenticApplicationsAnalystAgentPersonaArtifactExamples[] | cdktn.IResolvable;
  /**
  * artifacts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#artifacts_config AgenticApplicationsAnalystAgentPersona#artifacts_config}
  */
  readonly artifactsConfig?: AgenticApplicationsAnalystAgentPersonaArtifactsConfig;
  /**
  * external_data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#external_data_sources AgenticApplicationsAnalystAgentPersona#external_data_sources}
  */
  readonly externalDataSources?: AgenticApplicationsAnalystAgentPersonaExternalDataSources[] | cdktn.IResolvable;
  /**
  * mcp_data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#mcp_data_sources AgenticApplicationsAnalystAgentPersona#mcp_data_sources}
  */
  readonly mcpDataSources?: AgenticApplicationsAnalystAgentPersonaMcpDataSources[] | cdktn.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#resources AgenticApplicationsAnalystAgentPersona#resources}
  */
  readonly resources?: AgenticApplicationsAnalystAgentPersonaResources[] | cdktn.IResolvable;
  /**
  * skills block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#skills AgenticApplicationsAnalystAgentPersona#skills}
  */
  readonly skills?: AgenticApplicationsAnalystAgentPersonaSkills[] | cdktn.IResolvable;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#tables AgenticApplicationsAnalystAgentPersona#tables}
  */
  readonly tables?: AgenticApplicationsAnalystAgentPersonaTables[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#timeouts AgenticApplicationsAnalystAgentPersona#timeouts}
  */
  readonly timeouts?: AgenticApplicationsAnalystAgentPersonaTimeouts;
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_dataset AgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_table AgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#column_descriptions AgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bigquery_dataset: cdktn.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktn.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_table AgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    f1_table: cdktn.stringToTerraform(struct!.f1Table),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    f1_table: {
      value: cdktn.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_object AgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktn.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktn.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_reference AgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktn.stringToTerraform(struct!.fileReference),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktn.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_content AgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_title AgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#mime_type AgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_content: cdktn.stringToTerraform(struct!.fileContent),
    file_title: cdktn.stringToTerraform(struct!.fileTitle),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_content: {
      value: cdktn.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktn.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_label AgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#model_description AgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#use_rag AgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktn.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_resource AgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_resource AgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_resource AgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_drive_resource AgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#raw_file_resource AgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_label: cdktn.stringToTerraform(struct!.displayLabel),
    model_description: cdktn.stringToTerraform(struct!.modelDescription),
    use_rag: cdktn.booleanToTerraform(struct!.useRag),
    bigquery_resource: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_label: {
      value: cdktn.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktn.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktn.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktn.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktn.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactExamples {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#resource AgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactExamplesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToTerraform(struct!.resource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactExamplesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactExamples | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: AgenticApplicationsAnalystAgentPersonaArtifactExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaArtifactExamplesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaArtifactExamples[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaArtifactExamplesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaArtifactExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_dataset AgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_table AgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#column_descriptions AgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bigquery_dataset: cdktn.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktn.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_table AgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    f1_table: cdktn.stringToTerraform(struct!.f1Table),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    f1_table: {
      value: cdktn.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_object AgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktn.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktn.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_reference AgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktn.stringToTerraform(struct!.fileReference),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktn.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_content AgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_title AgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#mime_type AgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_content: cdktn.stringToTerraform(struct!.fileContent),
    file_title: cdktn.stringToTerraform(struct!.fileTitle),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_content: {
      value: cdktn.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktn.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_label AgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#model_description AgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#use_rag AgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktn.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_resource AgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_resource AgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_resource AgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_drive_resource AgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#raw_file_resource AgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_label: cdktn.stringToTerraform(struct!.displayLabel),
    model_description: cdktn.stringToTerraform(struct!.modelDescription),
    use_rag: cdktn.booleanToTerraform(struct!.useRag),
    bigquery_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_label: {
      value: cdktn.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktn.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktn.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktn.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktn.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#resource AgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToTerraform(struct!.resource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions {
  /**
  * Format for document export.
  * Possible values:
  * PDF
  * DOCX
  * GOOGLE_DOCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#export_format AgenticApplicationsAnalystAgentPersona#export_format}
  */
  readonly exportFormat?: string;
  /**
  * document_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#document_examples AgenticApplicationsAnalystAgentPersona#document_examples}
  */
  readonly documentExamples?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples[] | cdktn.IResolvable;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_format: cdktn.stringToTerraform(struct!.exportFormat),
    document_examples: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToTerraform, true)(struct!.documentExamples),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_format: {
      value: cdktn.stringToHclTerraform(struct!.exportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_examples: {
      value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesToHclTerraform, true)(struct!.documentExamples),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportFormat = this._exportFormat;
    }
    if (this._documentExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentExamples = this._documentExamples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exportFormat = undefined;
      this._documentExamples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exportFormat = value.exportFormat;
      this._documentExamples.internalValue = value.documentExamples;
    }
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // document_examples - computed: false, optional: true, required: false
  private _documentExamples = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamplesList(this, "document_examples", false);
  public get documentExamples() {
    return this._documentExamples;
  }
  public putDocumentExamples(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsDocumentExamples[] | cdktn.IResolvable) {
    this._documentExamples.internalValue = value;
  }
  public resetDocumentExamples() {
    this._documentExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentExamplesInput() {
    return this._documentExamples.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_dataset AgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_table AgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#column_descriptions AgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bigquery_dataset: cdktn.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktn.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_table AgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    f1_table: cdktn.stringToTerraform(struct!.f1Table),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    f1_table: {
      value: cdktn.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_object AgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktn.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktn.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_reference AgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktn.stringToTerraform(struct!.fileReference),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktn.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_content AgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_title AgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#mime_type AgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_content: cdktn.stringToTerraform(struct!.fileContent),
    file_title: cdktn.stringToTerraform(struct!.fileTitle),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_content: {
      value: cdktn.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktn.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_label AgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#model_description AgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#use_rag AgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktn.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_resource AgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_resource AgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_resource AgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_drive_resource AgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#raw_file_resource AgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_label: cdktn.stringToTerraform(struct!.displayLabel),
    model_description: cdktn.stringToTerraform(struct!.modelDescription),
    use_rag: cdktn.booleanToTerraform(struct!.useRag),
    bigquery_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_label: {
      value: cdktn.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktn.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktn.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktn.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktn.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#resource AgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToTerraform(struct!.resource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions {
  /**
  * Format for slide export.
  * Possible values:
  * PDF
  * PNG
  * PPTX
  * GOOGLE_SLIDES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#export_format AgenticApplicationsAnalystAgentPersona#export_format}
  */
  readonly exportFormat?: string;
  /**
  * slide_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#slide_examples AgenticApplicationsAnalystAgentPersona#slide_examples}
  */
  readonly slideExamples?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples[] | cdktn.IResolvable;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_format: cdktn.stringToTerraform(struct!.exportFormat),
    slide_examples: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToTerraform, true)(struct!.slideExamples),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_format: {
      value: cdktn.stringToHclTerraform(struct!.exportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slide_examples: {
      value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesToHclTerraform, true)(struct!.slideExamples),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportFormat = this._exportFormat;
    }
    if (this._slideExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideExamples = this._slideExamples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exportFormat = undefined;
      this._slideExamples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exportFormat = value.exportFormat;
      this._slideExamples.internalValue = value.slideExamples;
    }
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // slide_examples - computed: false, optional: true, required: false
  private _slideExamples = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamplesList(this, "slide_examples", false);
  public get slideExamples() {
    return this._slideExamples;
  }
  public putSlideExamples(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsSlideExamples[] | cdktn.IResolvable) {
    this._slideExamples.internalValue = value;
  }
  public resetSlideExamples() {
    this._slideExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slideExamplesInput() {
    return this._slideExamples.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_dataset AgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_table AgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#column_descriptions AgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bigquery_dataset: cdktn.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktn.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_table AgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    f1_table: cdktn.stringToTerraform(struct!.f1Table),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    f1_table: {
      value: cdktn.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_object AgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktn.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktn.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_reference AgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktn.stringToTerraform(struct!.fileReference),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktn.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_content AgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_title AgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#mime_type AgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_content: cdktn.stringToTerraform(struct!.fileContent),
    file_title: cdktn.stringToTerraform(struct!.fileTitle),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_content: {
      value: cdktn.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktn.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_label AgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#model_description AgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#use_rag AgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktn.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_resource AgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_resource AgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_resource AgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_drive_resource AgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#raw_file_resource AgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_label: cdktn.stringToTerraform(struct!.displayLabel),
    model_description: cdktn.stringToTerraform(struct!.modelDescription),
    use_rag: cdktn.booleanToTerraform(struct!.useRag),
    bigquery_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_label: {
      value: cdktn.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktn.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktn.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceList",
    },
    f1_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktn.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktn.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples {
  /**
  * The type of the visualization (e.g. "Bar Chart", "Line Chart").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#visualization_type AgenticApplicationsAnalystAgentPersona#visualization_type}
  */
  readonly visualizationType: string;
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#resource AgenticApplicationsAnalystAgentPersona#resource}
  */
  readonly resource: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    visualization_type: cdktn.stringToTerraform(struct!.visualizationType),
    resource: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToTerraform(struct!.resource),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    visualization_type: {
      value: cdktn.stringToHclTerraform(struct!.visualizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationType = this._visualizationType;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visualizationType = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visualizationType = value.visualizationType;
      this._resource.internalValue = value.resource;
    }
  }

  // visualization_type - computed: false, optional: false, required: true
  private _visualizationType?: string; 
  public get visualizationType() {
    return this.getStringAttribute('visualization_type');
  }
  public set visualizationType(value: string) {
    this._visualizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationTypeInput() {
    return this._visualizationType;
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions {
  /**
  * visualization_examples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#visualization_examples AgenticApplicationsAnalystAgentPersona#visualization_examples}
  */
  readonly visualizationExamples?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples[] | cdktn.IResolvable;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    visualization_examples: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToTerraform, true)(struct!.visualizationExamples),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    visualization_examples: {
      value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesToHclTerraform, true)(struct!.visualizationExamples),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visualizationExamples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationExamples = this._visualizationExamples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visualizationExamples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visualizationExamples.internalValue = value.visualizationExamples;
    }
  }

  // visualization_examples - computed: false, optional: true, required: false
  private _visualizationExamples = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamplesList(this, "visualization_examples", false);
  public get visualizationExamples() {
    return this._visualizationExamples;
  }
  public putVisualizationExamples(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsVisualizationExamples[] | cdktn.IResolvable) {
    this._visualizationExamples.internalValue = value;
  }
  public resetVisualizationExamples() {
    this._visualizationExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationExamplesInput() {
    return this._visualizationExamples.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaArtifactsConfig {
  /**
  * document_generation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#document_generation_options AgenticApplicationsAnalystAgentPersona#document_generation_options}
  */
  readonly documentGenerationOptions?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions;
  /**
  * slide_generation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#slide_generation_options AgenticApplicationsAnalystAgentPersona#slide_generation_options}
  */
  readonly slideGenerationOptions?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions;
  /**
  * visualization_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#visualization_options AgenticApplicationsAnalystAgentPersona#visualization_options}
  */
  readonly visualizationOptions?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions;
}

export function agenticApplicationsAnalystAgentPersonaArtifactsConfigToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_generation_options: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToTerraform(struct!.documentGenerationOptions),
    slide_generation_options: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToTerraform(struct!.slideGenerationOptions),
    visualization_options: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToTerraform(struct!.visualizationOptions),
  }
}


export function agenticApplicationsAnalystAgentPersonaArtifactsConfigToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference | AgenticApplicationsAnalystAgentPersonaArtifactsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_generation_options: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsToHclTerraform(struct!.documentGenerationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsList",
    },
    slide_generation_options: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsToHclTerraform(struct!.slideGenerationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsList",
    },
    visualization_options: {
      value: agenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsToHclTerraform(struct!.visualizationOptions),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaArtifactsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentGenerationOptions = this._documentGenerationOptions?.internalValue;
    }
    if (this._slideGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideGenerationOptions = this._slideGenerationOptions?.internalValue;
    }
    if (this._visualizationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationOptions = this._visualizationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentGenerationOptions.internalValue = undefined;
      this._slideGenerationOptions.internalValue = undefined;
      this._visualizationOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentGenerationOptions.internalValue = value.documentGenerationOptions;
      this._slideGenerationOptions.internalValue = value.slideGenerationOptions;
      this._visualizationOptions.internalValue = value.visualizationOptions;
    }
  }

  // document_generation_options - computed: false, optional: true, required: false
  private _documentGenerationOptions = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptionsOutputReference(this, "document_generation_options");
  public get documentGenerationOptions() {
    return this._documentGenerationOptions;
  }
  public putDocumentGenerationOptions(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigDocumentGenerationOptions) {
    this._documentGenerationOptions.internalValue = value;
  }
  public resetDocumentGenerationOptions() {
    this._documentGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentGenerationOptionsInput() {
    return this._documentGenerationOptions.internalValue;
  }

  // slide_generation_options - computed: false, optional: true, required: false
  private _slideGenerationOptions = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptionsOutputReference(this, "slide_generation_options");
  public get slideGenerationOptions() {
    return this._slideGenerationOptions;
  }
  public putSlideGenerationOptions(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigSlideGenerationOptions) {
    this._slideGenerationOptions.internalValue = value;
  }
  public resetSlideGenerationOptions() {
    this._slideGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slideGenerationOptionsInput() {
    return this._slideGenerationOptions.internalValue;
  }

  // visualization_options - computed: false, optional: true, required: false
  private _visualizationOptions = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptionsOutputReference(this, "visualization_options");
  public get visualizationOptions() {
    return this._visualizationOptions;
  }
  public putVisualizationOptions(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfigVisualizationOptions) {
    this._visualizationOptions.internalValue = value;
  }
  public resetVisualizationOptions() {
    this._visualizationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationOptionsInput() {
    return this._visualizationOptions.internalValue;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda {
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference | AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AgenticApplicationsAnalystAgentPersonaExternalDataSources {
  /**
  * Whether this external data source is enabled for the current analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#enabled AgenticApplicationsAnalystAgentPersona#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * air_quality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#air_quality AgenticApplicationsAnalystAgentPersona#air_quality}
  */
  readonly airQuality?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality;
  /**
  * bureau_labor_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bureau_labor_statistics AgenticApplicationsAnalystAgentPersona#bureau_labor_statistics}
  */
  readonly bureauLaborStatistics?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics;
  /**
  * coindesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#coindesk AgenticApplicationsAnalystAgentPersona#coindesk}
  */
  readonly coindesk?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk;
  /**
  * finnhub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#finnhub AgenticApplicationsAnalystAgentPersona#finnhub}
  */
  readonly finnhub?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub;
  /**
  * fred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#fred AgenticApplicationsAnalystAgentPersona#fred}
  */
  readonly fred?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred;
  /**
  * sec_edgar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#sec_edgar AgenticApplicationsAnalystAgentPersona#sec_edgar}
  */
  readonly secEdgar?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar;
  /**
  * treasury_securities_auctions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#treasury_securities_auctions AgenticApplicationsAnalystAgentPersona#treasury_securities_auctions}
  */
  readonly treasurySecuritiesAuctions?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions;
  /**
  * usda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#usda AgenticApplicationsAnalystAgentPersona#usda}
  */
  readonly usda?: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda;
}

export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    air_quality: agenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToTerraform(struct!.airQuality),
    bureau_labor_statistics: agenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToTerraform(struct!.bureauLaborStatistics),
    coindesk: agenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToTerraform(struct!.coindesk),
    finnhub: agenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToTerraform(struct!.finnhub),
    fred: agenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToTerraform(struct!.fred),
    sec_edgar: agenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToTerraform(struct!.secEdgar),
    treasury_securities_auctions: agenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToTerraform(struct!.treasurySecuritiesAuctions),
    usda: agenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToTerraform(struct!.usda),
  }
}


export function agenticApplicationsAnalystAgentPersonaExternalDataSourcesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    air_quality: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityToHclTerraform(struct!.airQuality),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityList",
    },
    bureau_labor_statistics: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsToHclTerraform(struct!.bureauLaborStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsList",
    },
    coindesk: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskToHclTerraform(struct!.coindesk),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskList",
    },
    finnhub: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubToHclTerraform(struct!.finnhub),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubList",
    },
    fred: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesFredToHclTerraform(struct!.fred),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredList",
    },
    sec_edgar: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarToHclTerraform(struct!.secEdgar),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarList",
    },
    treasury_securities_auctions: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsToHclTerraform(struct!.treasurySecuritiesAuctions),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsList",
    },
    usda: {
      value: agenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaToHclTerraform(struct!.usda),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._airQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.airQuality = this._airQuality?.internalValue;
    }
    if (this._bureauLaborStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bureauLaborStatistics = this._bureauLaborStatistics?.internalValue;
    }
    if (this._coindesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coindesk = this._coindesk?.internalValue;
    }
    if (this._finnhub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finnhub = this._finnhub?.internalValue;
    }
    if (this._fred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fred = this._fred?.internalValue;
    }
    if (this._secEdgar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secEdgar = this._secEdgar?.internalValue;
    }
    if (this._treasurySecuritiesAuctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treasurySecuritiesAuctions = this._treasurySecuritiesAuctions?.internalValue;
    }
    if (this._usda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usda = this._usda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaExternalDataSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._airQuality.internalValue = undefined;
      this._bureauLaborStatistics.internalValue = undefined;
      this._coindesk.internalValue = undefined;
      this._finnhub.internalValue = undefined;
      this._fred.internalValue = undefined;
      this._secEdgar.internalValue = undefined;
      this._treasurySecuritiesAuctions.internalValue = undefined;
      this._usda.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._airQuality.internalValue = value.airQuality;
      this._bureauLaborStatistics.internalValue = value.bureauLaborStatistics;
      this._coindesk.internalValue = value.coindesk;
      this._finnhub.internalValue = value.finnhub;
      this._fred.internalValue = value.fred;
      this._secEdgar.internalValue = value.secEdgar;
      this._treasurySecuritiesAuctions.internalValue = value.treasurySecuritiesAuctions;
      this._usda.internalValue = value.usda;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // selection_name - computed: true, optional: false, required: false
  public get selectionName() {
    return this.getStringAttribute('selection_name');
  }

  // air_quality - computed: false, optional: true, required: false
  private _airQuality = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQualityOutputReference(this, "air_quality");
  public get airQuality() {
    return this._airQuality;
  }
  public putAirQuality(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesAirQuality) {
    this._airQuality.internalValue = value;
  }
  public resetAirQuality() {
    this._airQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airQualityInput() {
    return this._airQuality.internalValue;
  }

  // bureau_labor_statistics - computed: false, optional: true, required: false
  private _bureauLaborStatistics = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatisticsOutputReference(this, "bureau_labor_statistics");
  public get bureauLaborStatistics() {
    return this._bureauLaborStatistics;
  }
  public putBureauLaborStatistics(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesBureauLaborStatistics) {
    this._bureauLaborStatistics.internalValue = value;
  }
  public resetBureauLaborStatistics() {
    this._bureauLaborStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bureauLaborStatisticsInput() {
    return this._bureauLaborStatistics.internalValue;
  }

  // coindesk - computed: false, optional: true, required: false
  private _coindesk = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindeskOutputReference(this, "coindesk");
  public get coindesk() {
    return this._coindesk;
  }
  public putCoindesk(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesCoindesk) {
    this._coindesk.internalValue = value;
  }
  public resetCoindesk() {
    this._coindesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coindeskInput() {
    return this._coindesk.internalValue;
  }

  // finnhub - computed: false, optional: true, required: false
  private _finnhub = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhubOutputReference(this, "finnhub");
  public get finnhub() {
    return this._finnhub;
  }
  public putFinnhub(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFinnhub) {
    this._finnhub.internalValue = value;
  }
  public resetFinnhub() {
    this._finnhub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finnhubInput() {
    return this._finnhub.internalValue;
  }

  // fred - computed: false, optional: true, required: false
  private _fred = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFredOutputReference(this, "fred");
  public get fred() {
    return this._fred;
  }
  public putFred(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesFred) {
    this._fred.internalValue = value;
  }
  public resetFred() {
    this._fred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fredInput() {
    return this._fred.internalValue;
  }

  // sec_edgar - computed: false, optional: true, required: false
  private _secEdgar = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgarOutputReference(this, "sec_edgar");
  public get secEdgar() {
    return this._secEdgar;
  }
  public putSecEdgar(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesSecEdgar) {
    this._secEdgar.internalValue = value;
  }
  public resetSecEdgar() {
    this._secEdgar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secEdgarInput() {
    return this._secEdgar.internalValue;
  }

  // treasury_securities_auctions - computed: false, optional: true, required: false
  private _treasurySecuritiesAuctions = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctionsOutputReference(this, "treasury_securities_auctions");
  public get treasurySecuritiesAuctions() {
    return this._treasurySecuritiesAuctions;
  }
  public putTreasurySecuritiesAuctions(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesTreasurySecuritiesAuctions) {
    this._treasurySecuritiesAuctions.internalValue = value;
  }
  public resetTreasurySecuritiesAuctions() {
    this._treasurySecuritiesAuctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treasurySecuritiesAuctionsInput() {
    return this._treasurySecuritiesAuctions.internalValue;
  }

  // usda - computed: false, optional: true, required: false
  private _usda = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsdaOutputReference(this, "usda");
  public get usda() {
    return this._usda;
  }
  public putUsda(value: AgenticApplicationsAnalystAgentPersonaExternalDataSourcesUsda) {
    this._usda.internalValue = value;
  }
  public resetUsda() {
    this._usda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usdaInput() {
    return this._usda.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaExternalDataSourcesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaExternalDataSources[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaExternalDataSourcesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaMcpDataSources {
  /**
  * Input only. The API key of the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#api_key AgenticApplicationsAnalystAgentPersona#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API key parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#api_key_name AgenticApplicationsAnalystAgentPersona#api_key_name}
  */
  readonly apiKeyName?: string;
  /**
  * The client ID for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#client_id AgenticApplicationsAnalystAgentPersona#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. The client secret for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#client_secret AgenticApplicationsAnalystAgentPersona#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The description of the MCP agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#description AgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description: string;
  /**
  * The display name of the MCP server. Must be no longer than 63 characters
  * and can only contain letters, numbers, spaces, underscores, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_name AgenticApplicationsAnalystAgentPersona#display_name}
  */
  readonly displayName: string;
  /**
  * Whether this external data source is enabled for the current analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#enabled AgenticApplicationsAnalystAgentPersona#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The URL to use for retrieving the OAuth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#oauth_token_url AgenticApplicationsAnalystAgentPersona#oauth_token_url}
  */
  readonly oauthTokenUrl?: string;
  /**
  * The custom prompt for the MCP agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#prompt AgenticApplicationsAnalystAgentPersona#prompt}
  */
  readonly prompt?: string;
  /**
  * The URL of the MCP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#server_url AgenticApplicationsAnalystAgentPersona#server_url}
  */
  readonly serverUrl: string;
}

export function agenticApplicationsAnalystAgentPersonaMcpDataSourcesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_name: cdktn.stringToTerraform(struct!.apiKeyName),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    oauth_token_url: cdktn.stringToTerraform(struct!.oauthTokenUrl),
    prompt: cdktn.stringToTerraform(struct!.prompt),
    server_url: cdktn.stringToTerraform(struct!.serverUrl),
  }
}


export function agenticApplicationsAnalystAgentPersonaMcpDataSourcesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_name: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth_token_url: {
      value: cdktn.stringToHclTerraform(struct!.oauthTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktn.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktn.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaMcpDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyName = this._apiKeyName;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._oauthTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenUrl = this._oauthTokenUrl;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaMcpDataSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyName = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._oauthTokenUrl = undefined;
      this._prompt = undefined;
      this._serverUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyName = value.apiKeyName;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._description = value.description;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._oauthTokenUrl = value.oauthTokenUrl;
      this._prompt = value.prompt;
      this._serverUrl = value.serverUrl;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_name - computed: false, optional: true, required: false
  private _apiKeyName?: string; 
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }
  public set apiKeyName(value: string) {
    this._apiKeyName = value;
  }
  public resetApiKeyName() {
    this._apiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyNameInput() {
    return this._apiKeyName;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // oauth_token_url - computed: false, optional: true, required: false
  private _oauthTokenUrl?: string; 
  public get oauthTokenUrl() {
    return this.getStringAttribute('oauth_token_url');
  }
  public set oauthTokenUrl(value: string) {
    this._oauthTokenUrl = value;
  }
  public resetOauthTokenUrl() {
    this._oauthTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenUrlInput() {
    return this._oauthTokenUrl;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }
}

export class AgenticApplicationsAnalystAgentPersonaMcpDataSourcesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaMcpDataSources[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaMcpDataSourcesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaMcpDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource {
  /**
  * Points to a bigquery dataset to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_dataset AgenticApplicationsAnalystAgentPersona#bigquery_dataset}
  */
  readonly bigqueryDataset?: string;
  /**
  * Points to a bigquery table to use.
  * 
  * Expected Format:
  * projects/{project_id_or_number}/datasets/{dataset_id}/tables/{table_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_table AgenticApplicationsAnalystAgentPersona#bigquery_table}
  */
  readonly bigqueryTable?: string;
  /**
  * A map of column names to column descriptions for the bigquery_table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#column_descriptions AgenticApplicationsAnalystAgentPersona#column_descriptions}
  */
  readonly columnDescriptions?: { [key: string]: string };
}

export function agenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bigquery_dataset: cdktn.stringToTerraform(struct!.bigqueryDataset),
    bigquery_table: cdktn.stringToTerraform(struct!.bigqueryTable),
    column_descriptions: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.columnDescriptions),
  }
}


export function agenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bigquery_dataset: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryDataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bigquery_table: {
      value: cdktn.stringToHclTerraform(struct!.bigqueryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_descriptions: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.columnDescriptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDataset = this._bigqueryDataset;
    }
    if (this._bigqueryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryTable = this._bigqueryTable;
    }
    if (this._columnDescriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnDescriptions = this._columnDescriptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryDataset = undefined;
      this._bigqueryTable = undefined;
      this._columnDescriptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryDataset = value.bigqueryDataset;
      this._bigqueryTable = value.bigqueryTable;
      this._columnDescriptions = value.columnDescriptions;
    }
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset?: string; 
  public get bigqueryDataset() {
    return this.getStringAttribute('bigquery_dataset');
  }
  public set bigqueryDataset(value: string) {
    this._bigqueryDataset = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset;
  }

  // bigquery_table - computed: false, optional: true, required: false
  private _bigqueryTable?: string; 
  public get bigqueryTable() {
    return this.getStringAttribute('bigquery_table');
  }
  public set bigqueryTable(value: string) {
    this._bigqueryTable = value;
  }
  public resetBigqueryTable() {
    this._bigqueryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryTableInput() {
    return this._bigqueryTable;
  }

  // column_descriptions - computed: false, optional: true, required: false
  private _columnDescriptions?: { [key: string]: string }; 
  public get columnDescriptions() {
    return this.getStringMapAttribute('column_descriptions');
  }
  public set columnDescriptions(value: { [key: string]: string }) {
    this._columnDescriptions = value;
  }
  public resetColumnDescriptions() {
    this._columnDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDescriptionsInput() {
    return this._columnDescriptions;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaResourcesF1Resource {
  /**
  * ## - Points to an f1 table to use.
  * 
  * - Expected Format:
  * - {group}.{table_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_table AgenticApplicationsAnalystAgentPersona#f1_table}
  */
  readonly f1Table?: string;
}

export function agenticApplicationsAnalystAgentPersonaResourcesF1ResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    f1_table: cdktn.stringToTerraform(struct!.f1Table),
  }
}


export function agenticApplicationsAnalystAgentPersonaResourcesF1ResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesF1Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    f1_table: {
      value: cdktn.stringToHclTerraform(struct!.f1Table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaResourcesF1Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f1Table !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Table = this._f1Table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaResourcesF1Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f1Table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f1Table = value.f1Table;
    }
  }

  // f1_table - computed: false, optional: true, required: false
  private _f1Table?: string; 
  public get f1Table() {
    return this.getStringAttribute('f1_table');
  }
  public set f1Table(value: string) {
    this._f1Table = value;
  }
  public resetF1Table() {
    this._f1Table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1TableInput() {
    return this._f1Table;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * The Google Cloud Storage object or folder.
  * 
  * Format: /
  * or: //
  * 
  * Note that to refer to a folder, it _must_ end in a slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_object AgenticApplicationsAnalystAgentPersona#google_cloud_storage_object}
  */
  readonly googleCloudStorageObject: string;
}

export function agenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    google_cloud_storage_object: cdktn.stringToTerraform(struct!.googleCloudStorageObject),
  }
}


export function agenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    google_cloud_storage_object: {
      value: cdktn.stringToHclTerraform(struct!.googleCloudStorageObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._googleCloudStorageObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageObject = this._googleCloudStorageObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._googleCloudStorageObject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._googleCloudStorageObject = value.googleCloudStorageObject;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // google_cloud_storage_object - computed: false, optional: false, required: true
  private _googleCloudStorageObject?: string; 
  public get googleCloudStorageObject() {
    return this.getStringAttribute('google_cloud_storage_object');
  }
  public set googleCloudStorageObject(value: string) {
    this._googleCloudStorageObject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageObjectInput() {
    return this._googleCloudStorageObject;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource {
  /**
  * If non-empty, only files with these extensions are included when
  * expanding the resource.  If empty, all files are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_extension_restrictions AgenticApplicationsAnalystAgentPersona#file_extension_restrictions}
  */
  readonly fileExtensionRestrictions?: string[];
  /**
  * Points to a drive file to use. May refer to workspace files or folders
  * as well.  If folder is specifically, all files in the folder
  * (recursively) are used.
  * 
  * Expected Format:
  * files/{file_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_reference AgenticApplicationsAnalystAgentPersona#file_reference}
  */
  readonly fileReference?: string;
}

export function agenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_extension_restrictions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fileExtensionRestrictions),
    file_reference: cdktn.stringToTerraform(struct!.fileReference),
  }
}


export function agenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_extension_restrictions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fileExtensionRestrictions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_reference: {
      value: cdktn.stringToHclTerraform(struct!.fileReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileExtensionRestrictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensionRestrictions = this._fileExtensionRestrictions;
    }
    if (this._fileReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileReference = this._fileReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileExtensionRestrictions = undefined;
      this._fileReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileExtensionRestrictions = value.fileExtensionRestrictions;
      this._fileReference = value.fileReference;
    }
  }

  // file_extension_restrictions - computed: false, optional: true, required: false
  private _fileExtensionRestrictions?: string[]; 
  public get fileExtensionRestrictions() {
    return this.getListAttribute('file_extension_restrictions');
  }
  public set fileExtensionRestrictions(value: string[]) {
    this._fileExtensionRestrictions = value;
  }
  public resetFileExtensionRestrictions() {
    this._fileExtensionRestrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRestrictionsInput() {
    return this._fileExtensionRestrictions;
  }

  // file_reference - computed: false, optional: true, required: false
  private _fileReference?: string; 
  public get fileReference() {
    return this.getStringAttribute('file_reference');
  }
  public set fileReference(value: string) {
    this._fileReference = value;
  }
  public resetFileReference() {
    this._fileReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileReferenceInput() {
    return this._fileReference;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource {
  /**
  * The raw file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_content AgenticApplicationsAnalystAgentPersona#file_content}
  */
  readonly fileContent: string;
  /**
  * The title of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#file_title AgenticApplicationsAnalystAgentPersona#file_title}
  */
  readonly fileTitle: string;
  /**
  * The mime type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#mime_type AgenticApplicationsAnalystAgentPersona#mime_type}
  */
  readonly mimeType: string;
}

export function agenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_content: cdktn.stringToTerraform(struct!.fileContent),
    file_title: cdktn.stringToTerraform(struct!.fileTitle),
    mime_type: cdktn.stringToTerraform(struct!.mimeType),
  }
}


export function agenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference | AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_content: {
      value: cdktn.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_title: {
      value: cdktn.stringToHclTerraform(struct!.fileTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktn.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTitle = this._fileTitle;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContent = undefined;
      this._fileTitle = undefined;
      this._mimeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContent = value.fileContent;
      this._fileTitle = value.fileTitle;
      this._mimeType = value.mimeType;
    }
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_title - computed: false, optional: false, required: true
  private _fileTitle?: string; 
  public get fileTitle() {
    return this.getStringAttribute('file_title');
  }
  public set fileTitle(value: string) {
    this._fileTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTitleInput() {
    return this._fileTitle;
  }

  // mime_type - computed: false, optional: false, required: true
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }
}
export interface AgenticApplicationsAnalystAgentPersonaResources {
  /**
  * A user-friendly name for this resource. This can be shown to the user
  * and used by the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#display_label AgenticApplicationsAnalystAgentPersona#display_label}
  */
  readonly displayLabel?: string;
  /**
  * A description of the resource. The model may use this, it will not be
  * shown to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#model_description AgenticApplicationsAnalystAgentPersona#model_description}
  */
  readonly modelDescription?: string;
  /**
  * If true, use RAG to retrieve relevant information from the resources.
  * 
  * Must only be set for file-based resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#use_rag AgenticApplicationsAnalystAgentPersona#use_rag}
  */
  readonly useRag?: boolean | cdktn.IResolvable;
  /**
  * bigquery_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#bigquery_resource AgenticApplicationsAnalystAgentPersona#bigquery_resource}
  */
  readonly bigqueryResource?: AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource;
  /**
  * f1_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#f1_resource AgenticApplicationsAnalystAgentPersona#f1_resource}
  */
  readonly f1Resource?: AgenticApplicationsAnalystAgentPersonaResourcesF1Resource;
  /**
  * google_cloud_storage_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_cloud_storage_resource AgenticApplicationsAnalystAgentPersona#google_cloud_storage_resource}
  */
  readonly googleCloudStorageResource?: AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource;
  /**
  * google_drive_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#google_drive_resource AgenticApplicationsAnalystAgentPersona#google_drive_resource}
  */
  readonly googleDriveResource?: AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource;
  /**
  * raw_file_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#raw_file_resource AgenticApplicationsAnalystAgentPersona#raw_file_resource}
  */
  readonly rawFileResource?: AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource;
}

export function agenticApplicationsAnalystAgentPersonaResourcesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_label: cdktn.stringToTerraform(struct!.displayLabel),
    model_description: cdktn.stringToTerraform(struct!.modelDescription),
    use_rag: cdktn.booleanToTerraform(struct!.useRag),
    bigquery_resource: agenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToTerraform(struct!.bigqueryResource),
    f1_resource: agenticApplicationsAnalystAgentPersonaResourcesF1ResourceToTerraform(struct!.f1Resource),
    google_cloud_storage_resource: agenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToTerraform(struct!.googleCloudStorageResource),
    google_drive_resource: agenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToTerraform(struct!.googleDriveResource),
    raw_file_resource: agenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToTerraform(struct!.rawFileResource),
  }
}


export function agenticApplicationsAnalystAgentPersonaResourcesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_label: {
      value: cdktn.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_description: {
      value: cdktn.stringToHclTerraform(struct!.modelDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rag: {
      value: cdktn.booleanToHclTerraform(struct!.useRag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_resource: {
      value: agenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceToHclTerraform(struct!.bigqueryResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceList",
    },
    f1_resource: {
      value: agenticApplicationsAnalystAgentPersonaResourcesF1ResourceToHclTerraform(struct!.f1Resource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaResourcesF1ResourceList",
    },
    google_cloud_storage_resource: {
      value: agenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceToHclTerraform(struct!.googleCloudStorageResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceList",
    },
    google_drive_resource: {
      value: agenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceToHclTerraform(struct!.googleDriveResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceList",
    },
    raw_file_resource: {
      value: agenticApplicationsAnalystAgentPersonaResourcesRawFileResourceToHclTerraform(struct!.rawFileResource),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._modelDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDescription = this._modelDescription;
    }
    if (this._useRag !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRag = this._useRag;
    }
    if (this._bigqueryResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryResource = this._bigqueryResource?.internalValue;
    }
    if (this._f1Resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f1Resource = this._f1Resource?.internalValue;
    }
    if (this._googleCloudStorageResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorageResource = this._googleCloudStorageResource?.internalValue;
    }
    if (this._googleDriveResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleDriveResource = this._googleDriveResource?.internalValue;
    }
    if (this._rawFileResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawFileResource = this._rawFileResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayLabel = undefined;
      this._modelDescription = undefined;
      this._useRag = undefined;
      this._bigqueryResource.internalValue = undefined;
      this._f1Resource.internalValue = undefined;
      this._googleCloudStorageResource.internalValue = undefined;
      this._googleDriveResource.internalValue = undefined;
      this._rawFileResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayLabel = value.displayLabel;
      this._modelDescription = value.modelDescription;
      this._useRag = value.useRag;
      this._bigqueryResource.internalValue = value.bigqueryResource;
      this._f1Resource.internalValue = value.f1Resource;
      this._googleCloudStorageResource.internalValue = value.googleCloudStorageResource;
      this._googleDriveResource.internalValue = value.googleDriveResource;
      this._rawFileResource.internalValue = value.rawFileResource;
    }
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
  }

  // use_rag - computed: false, optional: true, required: false
  private _useRag?: boolean | cdktn.IResolvable; 
  public get useRag() {
    return this.getBooleanAttribute('use_rag');
  }
  public set useRag(value: boolean | cdktn.IResolvable) {
    this._useRag = value;
  }
  public resetUseRag() {
    this._useRag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRagInput() {
    return this._useRag;
  }

  // bigquery_resource - computed: false, optional: true, required: false
  private _bigqueryResource = new AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResourceOutputReference(this, "bigquery_resource");
  public get bigqueryResource() {
    return this._bigqueryResource;
  }
  public putBigqueryResource(value: AgenticApplicationsAnalystAgentPersonaResourcesBigqueryResource) {
    this._bigqueryResource.internalValue = value;
  }
  public resetBigqueryResource() {
    this._bigqueryResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryResourceInput() {
    return this._bigqueryResource.internalValue;
  }

  // f1_resource - computed: false, optional: true, required: false
  private _f1Resource = new AgenticApplicationsAnalystAgentPersonaResourcesF1ResourceOutputReference(this, "f1_resource");
  public get f1Resource() {
    return this._f1Resource;
  }
  public putF1Resource(value: AgenticApplicationsAnalystAgentPersonaResourcesF1Resource) {
    this._f1Resource.internalValue = value;
  }
  public resetF1Resource() {
    this._f1Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f1ResourceInput() {
    return this._f1Resource.internalValue;
  }

  // google_cloud_storage_resource - computed: false, optional: true, required: false
  private _googleCloudStorageResource = new AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResourceOutputReference(this, "google_cloud_storage_resource");
  public get googleCloudStorageResource() {
    return this._googleCloudStorageResource;
  }
  public putGoogleCloudStorageResource(value: AgenticApplicationsAnalystAgentPersonaResourcesGoogleCloudStorageResource) {
    this._googleCloudStorageResource.internalValue = value;
  }
  public resetGoogleCloudStorageResource() {
    this._googleCloudStorageResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageResourceInput() {
    return this._googleCloudStorageResource.internalValue;
  }

  // google_drive_resource - computed: false, optional: true, required: false
  private _googleDriveResource = new AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResourceOutputReference(this, "google_drive_resource");
  public get googleDriveResource() {
    return this._googleDriveResource;
  }
  public putGoogleDriveResource(value: AgenticApplicationsAnalystAgentPersonaResourcesGoogleDriveResource) {
    this._googleDriveResource.internalValue = value;
  }
  public resetGoogleDriveResource() {
    this._googleDriveResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDriveResourceInput() {
    return this._googleDriveResource.internalValue;
  }

  // raw_file_resource - computed: false, optional: true, required: false
  private _rawFileResource = new AgenticApplicationsAnalystAgentPersonaResourcesRawFileResourceOutputReference(this, "raw_file_resource");
  public get rawFileResource() {
    return this._rawFileResource;
  }
  public putRawFileResource(value: AgenticApplicationsAnalystAgentPersonaResourcesRawFileResource) {
    this._rawFileResource.internalValue = value;
  }
  public resetRawFileResource() {
    this._rawFileResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawFileResourceInput() {
    return this._rawFileResource.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaResourcesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaResources[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaResourcesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaSkillsReferences {
  /**
  * The content of the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#content AgenticApplicationsAnalystAgentPersona#content}
  */
  readonly content: string;
  /**
  * The identifier of the reference within the skill. Use a descriptive
  * string that reflects the reference's function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#reference_id AgenticApplicationsAnalystAgentPersona#reference_id}
  */
  readonly referenceId: string;
}

export function agenticApplicationsAnalystAgentPersonaSkillsReferencesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    reference_id: cdktn.stringToTerraform(struct!.referenceId),
  }
}


export function agenticApplicationsAnalystAgentPersonaSkillsReferencesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_id: {
      value: cdktn.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaSkillsReferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaSkillsReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._referenceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._referenceId = value.referenceId;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // reference_id - computed: false, optional: false, required: true
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }
}

export class AgenticApplicationsAnalystAgentPersonaSkillsReferencesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaSkillsReferences[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaSkillsReferencesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaSkillsReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaSkills {
  /**
  * The markdown text content of the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#content AgenticApplicationsAnalystAgentPersona#content}
  */
  readonly content: string;
  /**
  * The description of the skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#description AgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description?: string;
  /**
  * The identifier of the skill. Use a descriptive string that reflects the
  * skill's function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#skill_id AgenticApplicationsAnalystAgentPersona#skill_id}
  */
  readonly skillId: string;
  /**
  * references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#references AgenticApplicationsAnalystAgentPersona#references}
  */
  readonly references?: AgenticApplicationsAnalystAgentPersonaSkillsReferences[] | cdktn.IResolvable;
}

export function agenticApplicationsAnalystAgentPersonaSkillsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaSkills | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    description: cdktn.stringToTerraform(struct!.description),
    skill_id: cdktn.stringToTerraform(struct!.skillId),
    references: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaSkillsReferencesToTerraform, true)(struct!.references),
  }
}


export function agenticApplicationsAnalystAgentPersonaSkillsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaSkills | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skill_id: {
      value: cdktn.stringToHclTerraform(struct!.skillId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaSkillsReferencesToHclTerraform, true)(struct!.references),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaSkillsReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaSkillsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaSkills | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._skillId !== undefined) {
      hasAnyValues = true;
      internalValueResult.skillId = this._skillId;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaSkills | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._skillId = undefined;
      this._references.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._skillId = value.skillId;
      this._references.internalValue = value.references;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // skill_id - computed: false, optional: false, required: true
  private _skillId?: string; 
  public get skillId() {
    return this.getStringAttribute('skill_id');
  }
  public set skillId(value: string) {
    this._skillId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skillIdInput() {
    return this._skillId;
  }

  // references - computed: false, optional: true, required: false
  private _references = new AgenticApplicationsAnalystAgentPersonaSkillsReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
  public putReferences(value: AgenticApplicationsAnalystAgentPersonaSkillsReferences[] | cdktn.IResolvable) {
    this._references.internalValue = value;
  }
  public resetReferences() {
    this._references.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaSkillsList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaSkills[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaSkillsOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaSkillsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaTablesColumns {
  /**
  * The data type of the column. This should be a GoogleSQL data type.
  * Parameterized types such as PROTO, ENUM, ARRAY, STRUCT<...>, and
  * RANGE are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#data_type AgenticApplicationsAnalystAgentPersona#data_type}
  */
  readonly dataType: string;
  /**
  * The description of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#description AgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description?: string;
  /**
  * The name of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#name AgenticApplicationsAnalystAgentPersona#name}
  */
  readonly name: string;
}

export function agenticApplicationsAnalystAgentPersonaTablesColumnsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function agenticApplicationsAnalystAgentPersonaTablesColumnsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaTablesColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaTablesColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaTablesColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaTablesColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class AgenticApplicationsAnalystAgentPersonaTablesColumnsList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaTablesColumns[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaTablesColumnsOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaTables {
  /**
  * The description of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#description AgenticApplicationsAnalystAgentPersona#description}
  */
  readonly description?: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#name AgenticApplicationsAnalystAgentPersona#name}
  */
  readonly name: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#columns AgenticApplicationsAnalystAgentPersona#columns}
  */
  readonly columns?: AgenticApplicationsAnalystAgentPersonaTablesColumns[] | cdktn.IResolvable;
}

export function agenticApplicationsAnalystAgentPersonaTablesToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    columns: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaTablesColumnsToTerraform, true)(struct!.columns),
  }
}


export function agenticApplicationsAnalystAgentPersonaTablesToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaTablesColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "AgenticApplicationsAnalystAgentPersonaTablesColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AgenticApplicationsAnalystAgentPersonaTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._columns.internalValue = value.columns;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new AgenticApplicationsAnalystAgentPersonaTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: AgenticApplicationsAnalystAgentPersonaTablesColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}

export class AgenticApplicationsAnalystAgentPersonaTablesList extends cdktn.ComplexList {
  public internalValue? : AgenticApplicationsAnalystAgentPersonaTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AgenticApplicationsAnalystAgentPersonaTablesOutputReference {
    return new AgenticApplicationsAnalystAgentPersonaTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AgenticApplicationsAnalystAgentPersonaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#create AgenticApplicationsAnalystAgentPersona#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#delete AgenticApplicationsAnalystAgentPersona#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#update AgenticApplicationsAnalystAgentPersona#update}
  */
  readonly update?: string;
}

export function agenticApplicationsAnalystAgentPersonaTimeoutsToTerraform(struct?: AgenticApplicationsAnalystAgentPersonaTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function agenticApplicationsAnalystAgentPersonaTimeoutsToHclTerraform(struct?: AgenticApplicationsAnalystAgentPersonaTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class AgenticApplicationsAnalystAgentPersonaTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AgenticApplicationsAnalystAgentPersonaTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AgenticApplicationsAnalystAgentPersonaTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona google_agentic_applications_analyst_agent_persona}
*/
export class AgenticApplicationsAnalystAgentPersona extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_agentic_applications_analyst_agent_persona";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AgenticApplicationsAnalystAgentPersona resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgenticApplicationsAnalystAgentPersona to import
  * @param importFromId The id of the existing AgenticApplicationsAnalystAgentPersona that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgenticApplicationsAnalystAgentPersona to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_agentic_applications_analyst_agent_persona", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/agentic_applications_analyst_agent_persona google_agentic_applications_analyst_agent_persona} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgenticApplicationsAnalystAgentPersonaConfig
  */
  public constructor(scope: Construct, id: string, config: AgenticApplicationsAnalystAgentPersonaConfig) {
    super(scope, id, {
      terraformResourceType: 'google_agentic_applications_analyst_agent_persona',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._analystAgentPersonaId = config.analystAgentPersonaId;
    this._customerContext = config.customerContext;
    this._deletionPolicy = config.deletionPolicy;
    this._displayDescription = config.displayDescription;
    this._displayName = config.displayName;
    this._geminiEnterpriseEngine = config.geminiEnterpriseEngine;
    this._id = config.id;
    this._location = config.location;
    this._modelDescription = config.modelDescription;
    this._project = config.project;
    this._role = config.role;
    this._artifactExamples.internalValue = config.artifactExamples;
    this._artifactsConfig.internalValue = config.artifactsConfig;
    this._externalDataSources.internalValue = config.externalDataSources;
    this._mcpDataSources.internalValue = config.mcpDataSources;
    this._resources.internalValue = config.resources;
    this._skills.internalValue = config.skills;
    this._tables.internalValue = config.tables;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyst_agent_persona_id - computed: false, optional: false, required: true
  private _analystAgentPersonaId?: string; 
  public get analystAgentPersonaId() {
    return this.getStringAttribute('analyst_agent_persona_id');
  }
  public set analystAgentPersonaId(value: string) {
    this._analystAgentPersonaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analystAgentPersonaIdInput() {
    return this._analystAgentPersonaId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_context - computed: false, optional: true, required: false
  private _customerContext?: string[]; 
  public get customerContext() {
    return this.getListAttribute('customer_context');
  }
  public set customerContext(value: string[]) {
    this._customerContext = value;
  }
  public resetCustomerContext() {
    this._customerContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContextInput() {
    return this._customerContext;
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

  // display_description - computed: false, optional: true, required: false
  private _displayDescription?: string; 
  public get displayDescription() {
    return this.getStringAttribute('display_description');
  }
  public set displayDescription(value: string) {
    this._displayDescription = value;
  }
  public resetDisplayDescription() {
    this._displayDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDescriptionInput() {
    return this._displayDescription;
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

  // gemini_enterprise_engine - computed: false, optional: true, required: false
  private _geminiEnterpriseEngine?: string; 
  public get geminiEnterpriseEngine() {
    return this.getStringAttribute('gemini_enterprise_engine');
  }
  public set geminiEnterpriseEngine(value: string) {
    this._geminiEnterpriseEngine = value;
  }
  public resetGeminiEnterpriseEngine() {
    this._geminiEnterpriseEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiEnterpriseEngineInput() {
    return this._geminiEnterpriseEngine;
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

  // model_description - computed: false, optional: true, required: false
  private _modelDescription?: string; 
  public get modelDescription() {
    return this.getStringAttribute('model_description');
  }
  public set modelDescription(value: string) {
    this._modelDescription = value;
  }
  public resetModelDescription() {
    this._modelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDescriptionInput() {
    return this._modelDescription;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // artifact_examples - computed: false, optional: true, required: false
  private _artifactExamples = new AgenticApplicationsAnalystAgentPersonaArtifactExamplesList(this, "artifact_examples", false);
  public get artifactExamples() {
    return this._artifactExamples;
  }
  public putArtifactExamples(value: AgenticApplicationsAnalystAgentPersonaArtifactExamples[] | cdktn.IResolvable) {
    this._artifactExamples.internalValue = value;
  }
  public resetArtifactExamples() {
    this._artifactExamples.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactExamplesInput() {
    return this._artifactExamples.internalValue;
  }

  // artifacts_config - computed: false, optional: true, required: false
  private _artifactsConfig = new AgenticApplicationsAnalystAgentPersonaArtifactsConfigOutputReference(this, "artifacts_config");
  public get artifactsConfig() {
    return this._artifactsConfig;
  }
  public putArtifactsConfig(value: AgenticApplicationsAnalystAgentPersonaArtifactsConfig) {
    this._artifactsConfig.internalValue = value;
  }
  public resetArtifactsConfig() {
    this._artifactsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsConfigInput() {
    return this._artifactsConfig.internalValue;
  }

  // external_data_sources - computed: false, optional: true, required: false
  private _externalDataSources = new AgenticApplicationsAnalystAgentPersonaExternalDataSourcesList(this, "external_data_sources", false);
  public get externalDataSources() {
    return this._externalDataSources;
  }
  public putExternalDataSources(value: AgenticApplicationsAnalystAgentPersonaExternalDataSources[] | cdktn.IResolvable) {
    this._externalDataSources.internalValue = value;
  }
  public resetExternalDataSources() {
    this._externalDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSourcesInput() {
    return this._externalDataSources.internalValue;
  }

  // mcp_data_sources - computed: false, optional: true, required: false
  private _mcpDataSources = new AgenticApplicationsAnalystAgentPersonaMcpDataSourcesList(this, "mcp_data_sources", false);
  public get mcpDataSources() {
    return this._mcpDataSources;
  }
  public putMcpDataSources(value: AgenticApplicationsAnalystAgentPersonaMcpDataSources[] | cdktn.IResolvable) {
    this._mcpDataSources.internalValue = value;
  }
  public resetMcpDataSources() {
    this._mcpDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpDataSourcesInput() {
    return this._mcpDataSources.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new AgenticApplicationsAnalystAgentPersonaResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: AgenticApplicationsAnalystAgentPersonaResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // skills - computed: false, optional: true, required: false
  private _skills = new AgenticApplicationsAnalystAgentPersonaSkillsList(this, "skills", false);
  public get skills() {
    return this._skills;
  }
  public putSkills(value: AgenticApplicationsAnalystAgentPersonaSkills[] | cdktn.IResolvable) {
    this._skills.internalValue = value;
  }
  public resetSkills() {
    this._skills.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillsInput() {
    return this._skills.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new AgenticApplicationsAnalystAgentPersonaTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: AgenticApplicationsAnalystAgentPersonaTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AgenticApplicationsAnalystAgentPersonaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AgenticApplicationsAnalystAgentPersonaTimeouts) {
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
      analyst_agent_persona_id: cdktn.stringToTerraform(this._analystAgentPersonaId),
      customer_context: cdktn.listMapper(cdktn.stringToTerraform, false)(this._customerContext),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_description: cdktn.stringToTerraform(this._displayDescription),
      display_name: cdktn.stringToTerraform(this._displayName),
      gemini_enterprise_engine: cdktn.stringToTerraform(this._geminiEnterpriseEngine),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      model_description: cdktn.stringToTerraform(this._modelDescription),
      project: cdktn.stringToTerraform(this._project),
      role: cdktn.stringToTerraform(this._role),
      artifact_examples: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaArtifactExamplesToTerraform, true)(this._artifactExamples.internalValue),
      artifacts_config: agenticApplicationsAnalystAgentPersonaArtifactsConfigToTerraform(this._artifactsConfig.internalValue),
      external_data_sources: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaExternalDataSourcesToTerraform, true)(this._externalDataSources.internalValue),
      mcp_data_sources: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaMcpDataSourcesToTerraform, true)(this._mcpDataSources.internalValue),
      resources: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaResourcesToTerraform, true)(this._resources.internalValue),
      skills: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaSkillsToTerraform, true)(this._skills.internalValue),
      tables: cdktn.listMapper(agenticApplicationsAnalystAgentPersonaTablesToTerraform, true)(this._tables.internalValue),
      timeouts: agenticApplicationsAnalystAgentPersonaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyst_agent_persona_id: {
        value: cdktn.stringToHclTerraform(this._analystAgentPersonaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_context: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._customerContext),
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
      display_description: {
        value: cdktn.stringToHclTerraform(this._displayDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gemini_enterprise_engine: {
        value: cdktn.stringToHclTerraform(this._geminiEnterpriseEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      model_description: {
        value: cdktn.stringToHclTerraform(this._modelDescription),
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
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_examples: {
        value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaArtifactExamplesToHclTerraform, true)(this._artifactExamples.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactExamplesList",
      },
      artifacts_config: {
        value: agenticApplicationsAnalystAgentPersonaArtifactsConfigToHclTerraform(this._artifactsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaArtifactsConfigList",
      },
      external_data_sources: {
        value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaExternalDataSourcesToHclTerraform, true)(this._externalDataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaExternalDataSourcesList",
      },
      mcp_data_sources: {
        value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaMcpDataSourcesToHclTerraform, true)(this._mcpDataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaMcpDataSourcesList",
      },
      resources: {
        value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaResourcesList",
      },
      skills: {
        value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaSkillsToHclTerraform, true)(this._skills.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaSkillsList",
      },
      tables: {
        value: cdktn.listMapperHcl(agenticApplicationsAnalystAgentPersonaTablesToHclTerraform, true)(this._tables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaTablesList",
      },
      timeouts: {
        value: agenticApplicationsAnalystAgentPersonaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AgenticApplicationsAnalystAgentPersonaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
