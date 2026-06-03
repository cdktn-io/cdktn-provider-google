/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContactCenterInsightsQaQuestionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Short, descriptive string, used in the UI where it's not practical
  * to display the full question body. E.g., "Greeting".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#abbreviation ContactCenterInsightsQaQuestion#abbreviation}
  */
  readonly abbreviation?: string;
  /**
  * Instructions describing how to determine the answer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#answer_instructions ContactCenterInsightsQaQuestion#answer_instructions}
  */
  readonly answerInstructions?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#deletion_policy ContactCenterInsightsQaQuestion#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#location ContactCenterInsightsQaQuestion#location}
  */
  readonly location: string;
  /**
  * Defines the order of the question within its parent scorecard revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#order ContactCenterInsightsQaQuestion#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}
  */
  readonly project?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#qa_scorecard ContactCenterInsightsQaQuestion#qa_scorecard}
  */
  readonly qaScorecard: string;
  /**
  * Question text. E.g., "Did the agent greet the customer?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#question_body ContactCenterInsightsQaQuestion#question_body}
  */
  readonly questionBody?: string;
  /**
  * The type of question.
  * Possible values:
  * CUSTOMIZABLE
  * PREDEFINED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#question_type ContactCenterInsightsQaQuestion#question_type}
  */
  readonly questionType?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#revision ContactCenterInsightsQaQuestion#revision}
  */
  readonly revision: string;
  /**
  * Questions are tagged for categorization and scoring. Tags can either be:
  * - Default Tags: These are predefined categories. They are identified by
  * their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
  * - Custom Tags: These are user-defined categories. They are identified by
  * their full resource name (e.g.,
  * projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  * Both default and custom tags are used to group questions and to influence
  * the scoring of each question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#tags ContactCenterInsightsQaQuestion#tags}
  */
  readonly tags?: string[];
  /**
  * answer_choices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#answer_choices ContactCenterInsightsQaQuestion#answer_choices}
  */
  readonly answerChoices?: ContactCenterInsightsQaQuestionAnswerChoices[] | cdktn.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#metrics ContactCenterInsightsQaQuestion#metrics}
  */
  readonly metrics?: ContactCenterInsightsQaQuestionMetrics;
  /**
  * predefined_question_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#predefined_question_config ContactCenterInsightsQaQuestion#predefined_question_config}
  */
  readonly predefinedQuestionConfig?: ContactCenterInsightsQaQuestionPredefinedQuestionConfig;
  /**
  * qa_question_data_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#qa_question_data_options ContactCenterInsightsQaQuestion#qa_question_data_options}
  */
  readonly qaQuestionDataOptions?: ContactCenterInsightsQaQuestionQaQuestionDataOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#timeouts ContactCenterInsightsQaQuestion#timeouts}
  */
  readonly timeouts?: ContactCenterInsightsQaQuestionTimeouts;
  /**
  * tuning_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#tuning_metadata ContactCenterInsightsQaQuestion#tuning_metadata}
  */
  readonly tuningMetadata?: ContactCenterInsightsQaQuestionTuningMetadata;
}
export interface ContactCenterInsightsQaQuestionAnswerChoices {
  /**
  * Boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#bool_value ContactCenterInsightsQaQuestion#bool_value}
  */
  readonly boolValue?: boolean | cdktn.IResolvable;
  /**
  * A short string used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#key ContactCenterInsightsQaQuestion#key}
  */
  readonly key?: string;
  /**
  * A value of "Not Applicable (N/A)". If provided, this field may only
  * be set to 'true'. If a question receives this answer, it will be
  * excluded from any score calculations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#na_value ContactCenterInsightsQaQuestion#na_value}
  */
  readonly naValue?: boolean | cdktn.IResolvable;
  /**
  * Numerical value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#num_value ContactCenterInsightsQaQuestion#num_value}
  */
  readonly numValue?: number;
  /**
  * Numerical score of the answer, used for generating the overall score of
  * a QaScorecardResult. If the answer uses na_value, this field is unused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#score ContactCenterInsightsQaQuestion#score}
  */
  readonly score?: number;
  /**
  * String value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#str_value ContactCenterInsightsQaQuestion#str_value}
  */
  readonly strValue?: string;
}

export function contactCenterInsightsQaQuestionAnswerChoicesToTerraform(struct?: ContactCenterInsightsQaQuestionAnswerChoices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktn.booleanToTerraform(struct!.boolValue),
    key: cdktn.stringToTerraform(struct!.key),
    na_value: cdktn.booleanToTerraform(struct!.naValue),
    num_value: cdktn.numberToTerraform(struct!.numValue),
    score: cdktn.numberToTerraform(struct!.score),
    str_value: cdktn.stringToTerraform(struct!.strValue),
  }
}


export function contactCenterInsightsQaQuestionAnswerChoicesToHclTerraform(struct?: ContactCenterInsightsQaQuestionAnswerChoices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktn.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    na_value: {
      value: cdktn.booleanToHclTerraform(struct!.naValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    num_value: {
      value: cdktn.numberToHclTerraform(struct!.numValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    score: {
      value: cdktn.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_value: {
      value: cdktn.stringToHclTerraform(struct!.strValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsQaQuestionAnswerChoicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContactCenterInsightsQaQuestionAnswerChoices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._naValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.naValue = this._naValue;
    }
    if (this._numValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numValue = this._numValue;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaQuestionAnswerChoices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._key = undefined;
      this._naValue = undefined;
      this._numValue = undefined;
      this._score = undefined;
      this._strValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._key = value.key;
      this._naValue = value.naValue;
      this._numValue = value.numValue;
      this._score = value.score;
      this._strValue = value.strValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktn.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktn.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // na_value - computed: false, optional: true, required: false
  private _naValue?: boolean | cdktn.IResolvable; 
  public get naValue() {
    return this.getBooleanAttribute('na_value');
  }
  public set naValue(value: boolean | cdktn.IResolvable) {
    this._naValue = value;
  }
  public resetNaValue() {
    this._naValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naValueInput() {
    return this._naValue;
  }

  // num_value - computed: false, optional: true, required: false
  private _numValue?: number; 
  public get numValue() {
    return this.getNumberAttribute('num_value');
  }
  public set numValue(value: number) {
    this._numValue = value;
  }
  public resetNumValue() {
    this._numValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numValueInput() {
    return this._numValue;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // str_value - computed: false, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
  }
}

export class ContactCenterInsightsQaQuestionAnswerChoicesList extends cdktn.ComplexList {
  public internalValue? : ContactCenterInsightsQaQuestionAnswerChoices[] | cdktn.IResolvable

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
  public get(index: number): ContactCenterInsightsQaQuestionAnswerChoicesOutputReference {
    return new ContactCenterInsightsQaQuestionAnswerChoicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactCenterInsightsQaQuestionMetrics {
}

export function contactCenterInsightsQaQuestionMetricsToTerraform(struct?: ContactCenterInsightsQaQuestionMetricsOutputReference | ContactCenterInsightsQaQuestionMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function contactCenterInsightsQaQuestionMetricsToHclTerraform(struct?: ContactCenterInsightsQaQuestionMetricsOutputReference | ContactCenterInsightsQaQuestionMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContactCenterInsightsQaQuestionMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsQaQuestionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaQuestionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accuracy - computed: true, optional: false, required: false
  public get accuracy() {
    return this.getNumberAttribute('accuracy');
  }
}
export interface ContactCenterInsightsQaQuestionPredefinedQuestionConfig {
  /**
  * The type of the predefined question.
  * Possible values:
  * CONVERSATION_OUTCOME
  * CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#type ContactCenterInsightsQaQuestion#type}
  */
  readonly type?: string;
}

export function contactCenterInsightsQaQuestionPredefinedQuestionConfigToTerraform(struct?: ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference | ContactCenterInsightsQaQuestionPredefinedQuestionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function contactCenterInsightsQaQuestionPredefinedQuestionConfigToHclTerraform(struct?: ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference | ContactCenterInsightsQaQuestionPredefinedQuestionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsQaQuestionPredefinedQuestionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaQuestionPredefinedQuestionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions {
  /**
  * Whether to include the per turn Dialogflow interaction data in conversation
  * transcript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#include_dialogflow_interaction_data ContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}
  */
  readonly includeDialogflowInteractionData?: boolean | cdktn.IResolvable;
}

export function contactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsToTerraform(struct?: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference | ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_dialogflow_interaction_data: cdktn.booleanToTerraform(struct!.includeDialogflowInteractionData),
  }
}


export function contactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsToHclTerraform(struct?: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference | ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_dialogflow_interaction_data: {
      value: cdktn.booleanToHclTerraform(struct!.includeDialogflowInteractionData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeDialogflowInteractionData !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDialogflowInteractionData = this._includeDialogflowInteractionData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeDialogflowInteractionData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeDialogflowInteractionData = value.includeDialogflowInteractionData;
    }
  }

  // include_dialogflow_interaction_data - computed: false, optional: true, required: false
  private _includeDialogflowInteractionData?: boolean | cdktn.IResolvable; 
  public get includeDialogflowInteractionData() {
    return this.getBooleanAttribute('include_dialogflow_interaction_data');
  }
  public set includeDialogflowInteractionData(value: boolean | cdktn.IResolvable) {
    this._includeDialogflowInteractionData = value;
  }
  public resetIncludeDialogflowInteractionData() {
    this._includeDialogflowInteractionData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDialogflowInteractionDataInput() {
    return this._includeDialogflowInteractionData;
  }
}
export interface ContactCenterInsightsQaQuestionQaQuestionDataOptions {
  /**
  * conversation_data_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#conversation_data_options ContactCenterInsightsQaQuestion#conversation_data_options}
  */
  readonly conversationDataOptions?: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions;
}

export function contactCenterInsightsQaQuestionQaQuestionDataOptionsToTerraform(struct?: ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference | ContactCenterInsightsQaQuestionQaQuestionDataOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversation_data_options: contactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsToTerraform(struct!.conversationDataOptions),
  }
}


export function contactCenterInsightsQaQuestionQaQuestionDataOptionsToHclTerraform(struct?: ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference | ContactCenterInsightsQaQuestionQaQuestionDataOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversation_data_options: {
      value: contactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsToHclTerraform(struct!.conversationDataOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsQaQuestionQaQuestionDataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationDataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationDataOptions = this._conversationDataOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaQuestionQaQuestionDataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conversationDataOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conversationDataOptions.internalValue = value.conversationDataOptions;
    }
  }

  // conversation_data_options - computed: false, optional: true, required: false
  private _conversationDataOptions = new ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(this, "conversation_data_options");
  public get conversationDataOptions() {
    return this._conversationDataOptions;
  }
  public putConversationDataOptions(value: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions) {
    this._conversationDataOptions.internalValue = value;
  }
  public resetConversationDataOptions() {
    this._conversationDataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationDataOptionsInput() {
    return this._conversationDataOptions.internalValue;
  }
}
export interface ContactCenterInsightsQaQuestionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}
  */
  readonly update?: string;
}

export function contactCenterInsightsQaQuestionTimeoutsToTerraform(struct?: ContactCenterInsightsQaQuestionTimeouts | cdktn.IResolvable): any {
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


export function contactCenterInsightsQaQuestionTimeoutsToHclTerraform(struct?: ContactCenterInsightsQaQuestionTimeouts | cdktn.IResolvable): any {
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

export class ContactCenterInsightsQaQuestionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContactCenterInsightsQaQuestionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContactCenterInsightsQaQuestionTimeouts | cdktn.IResolvable | undefined) {
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
export interface ContactCenterInsightsQaQuestionTuningMetadata {
  /**
  * A list of any applicable data validation warnings about the question's
  * feedback labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#dataset_validation_warnings ContactCenterInsightsQaQuestion#dataset_validation_warnings}
  */
  readonly datasetValidationWarnings?: string[];
  /**
  * Total number of valid labels provided for the question at the time of
  * tuining.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#total_valid_label_count ContactCenterInsightsQaQuestion#total_valid_label_count}
  */
  readonly totalValidLabelCount?: string;
  /**
  * Error status of the tuning operation for the question. Will only be set
  * if the tuning operation failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#tuning_error ContactCenterInsightsQaQuestion#tuning_error}
  */
  readonly tuningError?: string;
}

export function contactCenterInsightsQaQuestionTuningMetadataToTerraform(struct?: ContactCenterInsightsQaQuestionTuningMetadataOutputReference | ContactCenterInsightsQaQuestionTuningMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_validation_warnings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.datasetValidationWarnings),
    total_valid_label_count: cdktn.stringToTerraform(struct!.totalValidLabelCount),
    tuning_error: cdktn.stringToTerraform(struct!.tuningError),
  }
}


export function contactCenterInsightsQaQuestionTuningMetadataToHclTerraform(struct?: ContactCenterInsightsQaQuestionTuningMetadataOutputReference | ContactCenterInsightsQaQuestionTuningMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_validation_warnings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.datasetValidationWarnings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    total_valid_label_count: {
      value: cdktn.stringToHclTerraform(struct!.totalValidLabelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tuning_error: {
      value: cdktn.stringToHclTerraform(struct!.tuningError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsQaQuestionTuningMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsQaQuestionTuningMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetValidationWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetValidationWarnings = this._datasetValidationWarnings;
    }
    if (this._totalValidLabelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalValidLabelCount = this._totalValidLabelCount;
    }
    if (this._tuningError !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningError = this._tuningError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaQuestionTuningMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetValidationWarnings = undefined;
      this._totalValidLabelCount = undefined;
      this._tuningError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetValidationWarnings = value.datasetValidationWarnings;
      this._totalValidLabelCount = value.totalValidLabelCount;
      this._tuningError = value.tuningError;
    }
  }

  // dataset_validation_warnings - computed: false, optional: true, required: false
  private _datasetValidationWarnings?: string[]; 
  public get datasetValidationWarnings() {
    return this.getListAttribute('dataset_validation_warnings');
  }
  public set datasetValidationWarnings(value: string[]) {
    this._datasetValidationWarnings = value;
  }
  public resetDatasetValidationWarnings() {
    this._datasetValidationWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetValidationWarningsInput() {
    return this._datasetValidationWarnings;
  }

  // total_valid_label_count - computed: false, optional: true, required: false
  private _totalValidLabelCount?: string; 
  public get totalValidLabelCount() {
    return this.getStringAttribute('total_valid_label_count');
  }
  public set totalValidLabelCount(value: string) {
    this._totalValidLabelCount = value;
  }
  public resetTotalValidLabelCount() {
    this._totalValidLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalValidLabelCountInput() {
    return this._totalValidLabelCount;
  }

  // tuning_error - computed: false, optional: true, required: false
  private _tuningError?: string; 
  public get tuningError() {
    return this.getStringAttribute('tuning_error');
  }
  public set tuningError(value: string) {
    this._tuningError = value;
  }
  public resetTuningError() {
    this._tuningError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningErrorInput() {
    return this._tuningError;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question google_contact_center_insights_qa_question}
*/
export class ContactCenterInsightsQaQuestion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_contact_center_insights_qa_question";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactCenterInsightsQaQuestion to import
  * @param importFromId The id of the existing ContactCenterInsightsQaQuestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactCenterInsightsQaQuestion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_contact_center_insights_qa_question", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/contact_center_insights_qa_question google_contact_center_insights_qa_question} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactCenterInsightsQaQuestionConfig
  */
  public constructor(scope: Construct, id: string, config: ContactCenterInsightsQaQuestionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_contact_center_insights_qa_question',
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
    this._abbreviation = config.abbreviation;
    this._answerInstructions = config.answerInstructions;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._order = config.order;
    this._project = config.project;
    this._qaScorecard = config.qaScorecard;
    this._questionBody = config.questionBody;
    this._questionType = config.questionType;
    this._revision = config.revision;
    this._tags = config.tags;
    this._answerChoices.internalValue = config.answerChoices;
    this._metrics.internalValue = config.metrics;
    this._predefinedQuestionConfig.internalValue = config.predefinedQuestionConfig;
    this._qaQuestionDataOptions.internalValue = config.qaQuestionDataOptions;
    this._timeouts.internalValue = config.timeouts;
    this._tuningMetadata.internalValue = config.tuningMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abbreviation - computed: false, optional: true, required: false
  private _abbreviation?: string; 
  public get abbreviation() {
    return this.getStringAttribute('abbreviation');
  }
  public set abbreviation(value: string) {
    this._abbreviation = value;
  }
  public resetAbbreviation() {
    this._abbreviation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abbreviationInput() {
    return this._abbreviation;
  }

  // answer_instructions - computed: false, optional: true, required: false
  private _answerInstructions?: string; 
  public get answerInstructions() {
    return this.getStringAttribute('answer_instructions');
  }
  public set answerInstructions(value: string) {
    this._answerInstructions = value;
  }
  public resetAnswerInstructions() {
    this._answerInstructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerInstructionsInput() {
    return this._answerInstructions;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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

  // qa_scorecard - computed: false, optional: false, required: true
  private _qaScorecard?: string; 
  public get qaScorecard() {
    return this.getStringAttribute('qa_scorecard');
  }
  public set qaScorecard(value: string) {
    this._qaScorecard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qaScorecardInput() {
    return this._qaScorecard;
  }

  // question_body - computed: false, optional: true, required: false
  private _questionBody?: string; 
  public get questionBody() {
    return this.getStringAttribute('question_body');
  }
  public set questionBody(value: string) {
    this._questionBody = value;
  }
  public resetQuestionBody() {
    this._questionBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionBodyInput() {
    return this._questionBody;
  }

  // question_type - computed: false, optional: true, required: false
  private _questionType?: string; 
  public get questionType() {
    return this.getStringAttribute('question_type');
  }
  public set questionType(value: string) {
    this._questionType = value;
  }
  public resetQuestionType() {
    this._questionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionTypeInput() {
    return this._questionType;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // answer_choices - computed: false, optional: true, required: false
  private _answerChoices = new ContactCenterInsightsQaQuestionAnswerChoicesList(this, "answer_choices", false);
  public get answerChoices() {
    return this._answerChoices;
  }
  public putAnswerChoices(value: ContactCenterInsightsQaQuestionAnswerChoices[] | cdktn.IResolvable) {
    this._answerChoices.internalValue = value;
  }
  public resetAnswerChoices() {
    this._answerChoices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerChoicesInput() {
    return this._answerChoices.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ContactCenterInsightsQaQuestionMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ContactCenterInsightsQaQuestionMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // predefined_question_config - computed: false, optional: true, required: false
  private _predefinedQuestionConfig = new ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(this, "predefined_question_config");
  public get predefinedQuestionConfig() {
    return this._predefinedQuestionConfig;
  }
  public putPredefinedQuestionConfig(value: ContactCenterInsightsQaQuestionPredefinedQuestionConfig) {
    this._predefinedQuestionConfig.internalValue = value;
  }
  public resetPredefinedQuestionConfig() {
    this._predefinedQuestionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedQuestionConfigInput() {
    return this._predefinedQuestionConfig.internalValue;
  }

  // qa_question_data_options - computed: false, optional: true, required: false
  private _qaQuestionDataOptions = new ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(this, "qa_question_data_options");
  public get qaQuestionDataOptions() {
    return this._qaQuestionDataOptions;
  }
  public putQaQuestionDataOptions(value: ContactCenterInsightsQaQuestionQaQuestionDataOptions) {
    this._qaQuestionDataOptions.internalValue = value;
  }
  public resetQaQuestionDataOptions() {
    this._qaQuestionDataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qaQuestionDataOptionsInput() {
    return this._qaQuestionDataOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContactCenterInsightsQaQuestionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContactCenterInsightsQaQuestionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tuning_metadata - computed: false, optional: true, required: false
  private _tuningMetadata = new ContactCenterInsightsQaQuestionTuningMetadataOutputReference(this, "tuning_metadata");
  public get tuningMetadata() {
    return this._tuningMetadata;
  }
  public putTuningMetadata(value: ContactCenterInsightsQaQuestionTuningMetadata) {
    this._tuningMetadata.internalValue = value;
  }
  public resetTuningMetadata() {
    this._tuningMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningMetadataInput() {
    return this._tuningMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abbreviation: cdktn.stringToTerraform(this._abbreviation),
      answer_instructions: cdktn.stringToTerraform(this._answerInstructions),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      order: cdktn.numberToTerraform(this._order),
      project: cdktn.stringToTerraform(this._project),
      qa_scorecard: cdktn.stringToTerraform(this._qaScorecard),
      question_body: cdktn.stringToTerraform(this._questionBody),
      question_type: cdktn.stringToTerraform(this._questionType),
      revision: cdktn.stringToTerraform(this._revision),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      answer_choices: cdktn.listMapper(contactCenterInsightsQaQuestionAnswerChoicesToTerraform, true)(this._answerChoices.internalValue),
      metrics: contactCenterInsightsQaQuestionMetricsToTerraform(this._metrics.internalValue),
      predefined_question_config: contactCenterInsightsQaQuestionPredefinedQuestionConfigToTerraform(this._predefinedQuestionConfig.internalValue),
      qa_question_data_options: contactCenterInsightsQaQuestionQaQuestionDataOptionsToTerraform(this._qaQuestionDataOptions.internalValue),
      timeouts: contactCenterInsightsQaQuestionTimeoutsToTerraform(this._timeouts.internalValue),
      tuning_metadata: contactCenterInsightsQaQuestionTuningMetadataToTerraform(this._tuningMetadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abbreviation: {
        value: cdktn.stringToHclTerraform(this._abbreviation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      answer_instructions: {
        value: cdktn.stringToHclTerraform(this._answerInstructions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      order: {
        value: cdktn.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qa_scorecard: {
        value: cdktn.stringToHclTerraform(this._qaScorecard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      question_body: {
        value: cdktn.stringToHclTerraform(this._questionBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      question_type: {
        value: cdktn.stringToHclTerraform(this._questionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktn.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      answer_choices: {
        value: cdktn.listMapperHcl(contactCenterInsightsQaQuestionAnswerChoicesToHclTerraform, true)(this._answerChoices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsQaQuestionAnswerChoicesList",
      },
      metrics: {
        value: contactCenterInsightsQaQuestionMetricsToHclTerraform(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsQaQuestionMetricsList",
      },
      predefined_question_config: {
        value: contactCenterInsightsQaQuestionPredefinedQuestionConfigToHclTerraform(this._predefinedQuestionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsQaQuestionPredefinedQuestionConfigList",
      },
      qa_question_data_options: {
        value: contactCenterInsightsQaQuestionQaQuestionDataOptionsToHclTerraform(this._qaQuestionDataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsQaQuestionQaQuestionDataOptionsList",
      },
      timeouts: {
        value: contactCenterInsightsQaQuestionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContactCenterInsightsQaQuestionTimeouts",
      },
      tuning_metadata: {
        value: contactCenterInsightsQaQuestionTuningMetadataToHclTerraform(this._tuningMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsQaQuestionTuningMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
