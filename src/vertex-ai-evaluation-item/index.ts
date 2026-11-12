/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiEvaluationItemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#deletion_policy VertexAiEvaluationItem#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The user-friendly display name for the EvaluationItem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}
  */
  readonly displayName: string;
  /**
  * The type of the EvaluationItem. Possible values: ["REQUEST", "RESULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_item_type VertexAiEvaluationItem#evaluation_item_type}
  */
  readonly evaluationItemType: string;
  /**
  * The Cloud Storage object where the request or response is stored.
  * Exactly one of 'evaluation_request' or 'gcs_uri' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#gcs_uri VertexAiEvaluationItem#gcs_uri}
  */
  readonly gcsUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#id VertexAiEvaluationItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels for the EvaluationItem.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#labels VertexAiEvaluationItem#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * User-defined metadata for this evaluation item as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#metadata VertexAiEvaluationItem#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#project VertexAiEvaluationItem#project}
  */
  readonly project?: string;
  /**
  * The region of the EvaluationItem. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#region VertexAiEvaluationItem#region}
  */
  readonly region: string;
  /**
  * evaluation_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#evaluation_request VertexAiEvaluationItem#evaluation_request}
  */
  readonly evaluationRequest?: VertexAiEvaluationItemEvaluationRequest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#timeouts VertexAiEvaluationItem#timeouts}
  */
  readonly timeouts?: VertexAiEvaluationItemTimeouts;
}
export interface VertexAiEvaluationItemError {
}

export function vertexAiEvaluationItemErrorToTerraform(struct?: VertexAiEvaluationItemError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemErrorToHclTerraform(struct?: VertexAiEvaluationItemError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiEvaluationItemErrorList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemErrorOutputReference {
    return new VertexAiEvaluationItemErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationResponseCandidateResultsError {
}

export function vertexAiEvaluationItemEvaluationResponseCandidateResultsErrorToTerraform(struct?: VertexAiEvaluationItemEvaluationResponseCandidateResultsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemEvaluationResponseCandidateResultsErrorToHclTerraform(struct?: VertexAiEvaluationItemEvaluationResponseCandidateResultsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationResponseCandidateResultsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationResponseCandidateResultsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference {
    return new VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts {
}

export function vertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsToTerraform(struct?: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsToHclTerraform(struct?: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdicts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluated_rubric - computed: true, optional: false, required: false
  public get evaluatedRubric() {
    return this.getStringAttribute('evaluated_rubric');
  }

  // reasoning - computed: true, optional: false, required: false
  public get reasoning() {
    return this.getStringAttribute('reasoning');
  }

  // verdict - computed: true, optional: false, required: false
  public get verdict() {
    return this.getBooleanAttribute('verdict');
  }
}

export class VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference {
    return new VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationResponseCandidateResults {
}

export function vertexAiEvaluationItemEvaluationResponseCandidateResultsToTerraform(struct?: VertexAiEvaluationItemEvaluationResponseCandidateResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemEvaluationResponseCandidateResultsToHclTerraform(struct?: VertexAiEvaluationItemEvaluationResponseCandidateResults): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationResponseCandidateResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationResponseCandidateResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_results - computed: true, optional: false, required: false
  public get additionalResults() {
    return this.getStringAttribute('additional_results');
  }

  // candidate - computed: true, optional: false, required: false
  public get candidate() {
    return this.getStringAttribute('candidate');
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiEvaluationItemEvaluationResponseCandidateResultsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // explanation - computed: true, optional: false, required: false
  public get explanation() {
    return this.getStringAttribute('explanation');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // rubric_verdicts - computed: true, optional: false, required: false
  private _rubricVerdicts = new VertexAiEvaluationItemEvaluationResponseCandidateResultsRubricVerdictsList(this, "rubric_verdicts", false);
  public get rubricVerdicts() {
    return this._rubricVerdicts;
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class VertexAiEvaluationItemEvaluationResponseCandidateResultsList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference {
    return new VertexAiEvaluationItemEvaluationResponseCandidateResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationResponse {
}

export function vertexAiEvaluationItemEvaluationResponseToTerraform(struct?: VertexAiEvaluationItemEvaluationResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemEvaluationResponseToHclTerraform(struct?: VertexAiEvaluationItemEvaluationResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemEvaluationResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_results - computed: true, optional: false, required: false
  private _candidateResults = new VertexAiEvaluationItemEvaluationResponseCandidateResultsList(this, "candidate_results", false);
  public get candidateResults() {
    return this._candidateResults;
  }

  // evaluation_request - computed: true, optional: false, required: false
  public get evaluationRequest() {
    return this.getStringAttribute('evaluation_request');
  }

  // evaluation_run - computed: true, optional: false, required: false
  public get evaluationRun() {
    return this.getStringAttribute('evaluation_run');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }
}

export class VertexAiEvaluationItemEvaluationResponseList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemEvaluationResponseOutputReference {
    return new VertexAiEvaluationItemEvaluationResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationRequestCandidateResponsesError {
}

export function vertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestCandidateResponsesError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestCandidateResponsesError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestCandidateResponsesError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestCandidateResponsesError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference {
    return new VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationRequestCandidateResponses {
  /**
  * Represents the complete execution trace of a multi-turn conversation,
  * which can involve single or multiple agents, as a JSON string. This
  * field is used to provide the full output of an agent's run, including
  * all turns and events, for direct evaluation.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}
  */
  readonly agentData?: string;
  /**
  * The name of the candidate that produced the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}
  */
  readonly candidate: string;
  /**
  * Text response.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}
  */
  readonly text?: string;
  /**
  * Fields and values that can be used to populate the response template, as a JSON string.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}
  */
  readonly value?: string;
}

export function vertexAiEvaluationItemEvaluationRequestCandidateResponsesToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_data: cdktn.stringToTerraform(struct!.agentData),
    candidate: cdktn.stringToTerraform(struct!.candidate),
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function vertexAiEvaluationItemEvaluationRequestCandidateResponsesToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_data: {
      value: cdktn.stringToHclTerraform(struct!.agentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    candidate: {
      value: cdktn.stringToHclTerraform(struct!.candidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentData = this._agentData;
    }
    if (this._candidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidate = this._candidate;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestCandidateResponses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentData = undefined;
      this._candidate = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentData = value.agentData;
      this._candidate = value.candidate;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // agent_data - computed: false, optional: true, required: false
  private _agentData?: string; 
  public get agentData() {
    return this.getStringAttribute('agent_data');
  }
  public set agentData(value: string) {
    this._agentData = value;
  }
  public resetAgentData() {
    this._agentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDataInput() {
    return this._agentData;
  }

  // candidate - computed: false, optional: false, required: true
  private _candidate?: string; 
  public get candidate() {
    return this.getStringAttribute('candidate');
  }
  public set candidate(value: string) {
    this._candidate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateInput() {
    return this._candidate;
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiEvaluationItemEvaluationRequestCandidateResponsesErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VertexAiEvaluationItemEvaluationRequestCandidateResponsesList extends cdktn.ComplexList {
  public internalValue? : VertexAiEvaluationItemEvaluationRequestCandidateResponses[] | cdktn.IResolvable

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
  public get(index: number): VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference {
    return new VertexAiEvaluationItemEvaluationRequestCandidateResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationRequestGoldenResponseError {
}

export function vertexAiEvaluationItemEvaluationRequestGoldenResponseErrorToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestGoldenResponseError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function vertexAiEvaluationItemEvaluationRequestGoldenResponseErrorToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestGoldenResponseError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestGoldenResponseError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestGoldenResponseError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList extends cdktn.ComplexList {

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
  public get(index: number): VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference {
    return new VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationRequestGoldenResponse {
  /**
  * Represents the complete execution trace of a multi-turn conversation,
  * which can involve single or multiple agents, as a JSON string. This
  * field is used to provide the full output of an agent's run, including
  * all turns and events, for direct evaluation.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}
  */
  readonly agentData?: string;
  /**
  * The name of the candidate that produced the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate VertexAiEvaluationItem#candidate}
  */
  readonly candidate: string;
  /**
  * Text response.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}
  */
  readonly text?: string;
  /**
  * Fields and values that can be used to populate the response template, as a JSON string.
  * At most one of 'text', 'value', or 'agent_data' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}
  */
  readonly value?: string;
}

export function vertexAiEvaluationItemEvaluationRequestGoldenResponseToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference | VertexAiEvaluationItemEvaluationRequestGoldenResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_data: cdktn.stringToTerraform(struct!.agentData),
    candidate: cdktn.stringToTerraform(struct!.candidate),
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function vertexAiEvaluationItemEvaluationRequestGoldenResponseToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference | VertexAiEvaluationItemEvaluationRequestGoldenResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_data: {
      value: cdktn.stringToHclTerraform(struct!.agentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    candidate: {
      value: cdktn.stringToHclTerraform(struct!.candidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestGoldenResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentData = this._agentData;
    }
    if (this._candidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidate = this._candidate;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestGoldenResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentData = undefined;
      this._candidate = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentData = value.agentData;
      this._candidate = value.candidate;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // agent_data - computed: false, optional: true, required: false
  private _agentData?: string; 
  public get agentData() {
    return this.getStringAttribute('agent_data');
  }
  public set agentData(value: string) {
    this._agentData = value;
  }
  public resetAgentData() {
    this._agentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDataInput() {
    return this._agentData;
  }

  // candidate - computed: false, optional: false, required: true
  private _candidate?: string; 
  public get candidate() {
    return this.getStringAttribute('candidate');
  }
  public set candidate(value: string) {
    this._candidate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateInput() {
    return this._candidate;
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiEvaluationItemEvaluationRequestGoldenResponseErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData {
  /**
  * The values for fields in the prompt template, as a JSON string mapping
  * field names to Content objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#values VertexAiEvaluationItem#values}
  */
  readonly values?: string;
}

export function vertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference | VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.stringToTerraform(struct!.values),
  }
}


export function vertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference | VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface VertexAiEvaluationItemEvaluationRequestPromptUserScenario {
  /**
  * The plan for the conversation, used to drive the multi-turn agent run and
  * generate the simulated agent evaluation dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#conversation_plan VertexAiEvaluationItem#conversation_plan}
  */
  readonly conversationPlan: string;
  /**
  * The prompt that starts the conversation between the simulated user and
  * the agent under test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#starting_prompt VertexAiEvaluationItem#starting_prompt}
  */
  readonly startingPrompt: string;
}

export function vertexAiEvaluationItemEvaluationRequestPromptUserScenarioToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference | VertexAiEvaluationItemEvaluationRequestPromptUserScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conversation_plan: cdktn.stringToTerraform(struct!.conversationPlan),
    starting_prompt: cdktn.stringToTerraform(struct!.startingPrompt),
  }
}


export function vertexAiEvaluationItemEvaluationRequestPromptUserScenarioToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference | VertexAiEvaluationItemEvaluationRequestPromptUserScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conversation_plan: {
      value: cdktn.stringToHclTerraform(struct!.conversationPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_prompt: {
      value: cdktn.stringToHclTerraform(struct!.startingPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestPromptUserScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationPlan = this._conversationPlan;
    }
    if (this._startingPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPrompt = this._startingPrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestPromptUserScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conversationPlan = undefined;
      this._startingPrompt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conversationPlan = value.conversationPlan;
      this._startingPrompt = value.startingPrompt;
    }
  }

  // conversation_plan - computed: false, optional: false, required: true
  private _conversationPlan?: string; 
  public get conversationPlan() {
    return this.getStringAttribute('conversation_plan');
  }
  public set conversationPlan(value: string) {
    this._conversationPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationPlanInput() {
    return this._conversationPlan;
  }

  // starting_prompt - computed: false, optional: false, required: true
  private _startingPrompt?: string; 
  public get startingPrompt() {
    return this.getStringAttribute('starting_prompt');
  }
  public set startingPrompt(value: string) {
    this._startingPrompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPromptInput() {
    return this._startingPrompt;
  }
}
export interface VertexAiEvaluationItemEvaluationRequestPrompt {
  /**
  * Represents the complete execution trace of a multi-turn conversation,
  * which can involve single or multiple agents, as a JSON string. This
  * serves as the input context for agent scraping.
  * At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#agent_data VertexAiEvaluationItem#agent_data}
  */
  readonly agentData?: string;
  /**
  * Text prompt.
  * At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#text VertexAiEvaluationItem#text}
  */
  readonly text?: string;
  /**
  * Fields and values that can be used to populate the prompt template, as a JSON string.
  * At most one of 'text', 'value', 'prompt_template_data', 'agent_data', or 'user_scenario' can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#value VertexAiEvaluationItem#value}
  */
  readonly value?: string;
  /**
  * prompt_template_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt_template_data VertexAiEvaluationItem#prompt_template_data}
  */
  readonly promptTemplateData?: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData;
  /**
  * user_scenario block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#user_scenario VertexAiEvaluationItem#user_scenario}
  */
  readonly userScenario?: VertexAiEvaluationItemEvaluationRequestPromptUserScenario;
}

export function vertexAiEvaluationItemEvaluationRequestPromptToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestPromptOutputReference | VertexAiEvaluationItemEvaluationRequestPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_data: cdktn.stringToTerraform(struct!.agentData),
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
    prompt_template_data: vertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToTerraform(struct!.promptTemplateData),
    user_scenario: vertexAiEvaluationItemEvaluationRequestPromptUserScenarioToTerraform(struct!.userScenario),
  }
}


export function vertexAiEvaluationItemEvaluationRequestPromptToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestPromptOutputReference | VertexAiEvaluationItemEvaluationRequestPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_data: {
      value: cdktn.stringToHclTerraform(struct!.agentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_template_data: {
      value: vertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataToHclTerraform(struct!.promptTemplateData),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataList",
    },
    user_scenario: {
      value: vertexAiEvaluationItemEvaluationRequestPromptUserScenarioToHclTerraform(struct!.userScenario),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestPromptUserScenarioList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentData = this._agentData;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._promptTemplateData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptTemplateData = this._promptTemplateData?.internalValue;
    }
    if (this._userScenario?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userScenario = this._userScenario?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentData = undefined;
      this._text = undefined;
      this._value = undefined;
      this._promptTemplateData.internalValue = undefined;
      this._userScenario.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentData = value.agentData;
      this._text = value.text;
      this._value = value.value;
      this._promptTemplateData.internalValue = value.promptTemplateData;
      this._userScenario.internalValue = value.userScenario;
    }
  }

  // agent_data - computed: false, optional: true, required: false
  private _agentData?: string; 
  public get agentData() {
    return this.getStringAttribute('agent_data');
  }
  public set agentData(value: string) {
    this._agentData = value;
  }
  public resetAgentData() {
    this._agentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentDataInput() {
    return this._agentData;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // prompt_template_data - computed: false, optional: true, required: false
  private _promptTemplateData = new VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateDataOutputReference(this, "prompt_template_data");
  public get promptTemplateData() {
    return this._promptTemplateData;
  }
  public putPromptTemplateData(value: VertexAiEvaluationItemEvaluationRequestPromptPromptTemplateData) {
    this._promptTemplateData.internalValue = value;
  }
  public resetPromptTemplateData() {
    this._promptTemplateData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTemplateDataInput() {
    return this._promptTemplateData.internalValue;
  }

  // user_scenario - computed: false, optional: true, required: false
  private _userScenario = new VertexAiEvaluationItemEvaluationRequestPromptUserScenarioOutputReference(this, "user_scenario");
  public get userScenario() {
    return this._userScenario;
  }
  public putUserScenario(value: VertexAiEvaluationItemEvaluationRequestPromptUserScenario) {
    this._userScenario.internalValue = value;
  }
  public resetUserScenario() {
    this._userScenario.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userScenarioInput() {
    return this._userScenario.internalValue;
  }
}
export interface VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty {
  /**
  * Description of the property being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#description VertexAiEvaluationItem#description}
  */
  readonly description?: string;
}

export function vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference | VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference | VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
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
}
export interface VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#property VertexAiEvaluationItem#property}
  */
  readonly property?: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty;
}

export function vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference | VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property: vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToTerraform(struct!.property),
  }
}


export function vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference | VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property: {
      value: vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyToHclTerraform(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property = new VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }
  public putProperty(value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentProperty) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface VertexAiEvaluationItemEvaluationRequestRubricsRubrics {
  /**
  * The relative importance of this rubric. Possible values: ["HIGH", "MEDIUM", "LOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#importance VertexAiEvaluationItem#importance}
  */
  readonly importance?: string;
  /**
  * Unique identifier for the rubric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubric_id VertexAiEvaluationItem#rubric_id}
  */
  readonly rubricId?: string;
  /**
  * A type designator for the rubric, e.g. 'SUMMARIZATION_QUALITY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#type VertexAiEvaluationItem#type}
  */
  readonly type?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#content VertexAiEvaluationItem#content}
  */
  readonly content: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent;
}

export function vertexAiEvaluationItemEvaluationRequestRubricsRubricsToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    importance: cdktn.stringToTerraform(struct!.importance),
    rubric_id: cdktn.stringToTerraform(struct!.rubricId),
    type: cdktn.stringToTerraform(struct!.type),
    content: vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToTerraform(struct!.content),
  }
}


export function vertexAiEvaluationItemEvaluationRequestRubricsRubricsToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    importance: {
      value: cdktn.stringToHclTerraform(struct!.importance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rubric_id: {
      value: cdktn.stringToHclTerraform(struct!.rubricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: vertexAiEvaluationItemEvaluationRequestRubricsRubricsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importance !== undefined) {
      hasAnyValues = true;
      internalValueResult.importance = this._importance;
    }
    if (this._rubricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubricId = this._rubricId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestRubricsRubrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._importance = undefined;
      this._rubricId = undefined;
      this._type = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._importance = value.importance;
      this._rubricId = value.rubricId;
      this._type = value.type;
      this._content.internalValue = value.content;
    }
  }

  // importance - computed: false, optional: true, required: false
  private _importance?: string; 
  public get importance() {
    return this.getStringAttribute('importance');
  }
  public set importance(value: string) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // rubric_id - computed: false, optional: true, required: false
  private _rubricId?: string; 
  public get rubricId() {
    return this.getStringAttribute('rubric_id');
  }
  public set rubricId(value: string) {
    this._rubricId = value;
  }
  public resetRubricId() {
    this._rubricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricIdInput() {
    return this._rubricId;
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

  // content - computed: false, optional: false, required: true
  private _content = new VertexAiEvaluationItemEvaluationRequestRubricsRubricsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: VertexAiEvaluationItemEvaluationRequestRubricsRubricsContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class VertexAiEvaluationItemEvaluationRequestRubricsRubricsList extends cdktn.ComplexList {
  public internalValue? : VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] | cdktn.IResolvable

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
  public get(index: number): VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference {
    return new VertexAiEvaluationItemEvaluationRequestRubricsRubricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationRequestRubrics {
  /**
  * Human-readable name for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#display_name VertexAiEvaluationItem#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#group_id VertexAiEvaluationItem#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#name VertexAiEvaluationItem#name}
  */
  readonly name: string;
  /**
  * rubrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}
  */
  readonly rubrics?: VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] | cdktn.IResolvable;
}

export function vertexAiEvaluationItemEvaluationRequestRubricsToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    group_id: cdktn.stringToTerraform(struct!.groupId),
    name: cdktn.stringToTerraform(struct!.name),
    rubrics: cdktn.listMapper(vertexAiEvaluationItemEvaluationRequestRubricsRubricsToTerraform, true)(struct!.rubrics),
  }
}


export function vertexAiEvaluationItemEvaluationRequestRubricsToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
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
    rubrics: {
      value: cdktn.listMapperHcl(vertexAiEvaluationItemEvaluationRequestRubricsRubricsToHclTerraform, true)(struct!.rubrics),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestRubricsRubricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestRubricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rubrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubrics = this._rubrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequestRubrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._groupId = undefined;
      this._name = undefined;
      this._rubrics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._groupId = value.groupId;
      this._name = value.name;
      this._rubrics.internalValue = value.rubrics;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // rubrics - computed: false, optional: true, required: false
  private _rubrics = new VertexAiEvaluationItemEvaluationRequestRubricsRubricsList(this, "rubrics", false);
  public get rubrics() {
    return this._rubrics;
  }
  public putRubrics(value: VertexAiEvaluationItemEvaluationRequestRubricsRubrics[] | cdktn.IResolvable) {
    this._rubrics.internalValue = value;
  }
  public resetRubrics() {
    this._rubrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricsInput() {
    return this._rubrics.internalValue;
  }
}

export class VertexAiEvaluationItemEvaluationRequestRubricsList extends cdktn.ComplexList {
  public internalValue? : VertexAiEvaluationItemEvaluationRequestRubrics[] | cdktn.IResolvable

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
  public get(index: number): VertexAiEvaluationItemEvaluationRequestRubricsOutputReference {
    return new VertexAiEvaluationItemEvaluationRequestRubricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEvaluationItemEvaluationRequest {
  /**
  * candidate_responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#candidate_responses VertexAiEvaluationItem#candidate_responses}
  */
  readonly candidateResponses?: VertexAiEvaluationItemEvaluationRequestCandidateResponses[] | cdktn.IResolvable;
  /**
  * golden_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#golden_response VertexAiEvaluationItem#golden_response}
  */
  readonly goldenResponse?: VertexAiEvaluationItemEvaluationRequestGoldenResponse;
  /**
  * prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#prompt VertexAiEvaluationItem#prompt}
  */
  readonly prompt?: VertexAiEvaluationItemEvaluationRequestPrompt;
  /**
  * rubrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#rubrics VertexAiEvaluationItem#rubrics}
  */
  readonly rubrics?: VertexAiEvaluationItemEvaluationRequestRubrics[] | cdktn.IResolvable;
}

export function vertexAiEvaluationItemEvaluationRequestToTerraform(struct?: VertexAiEvaluationItemEvaluationRequestOutputReference | VertexAiEvaluationItemEvaluationRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    candidate_responses: cdktn.listMapper(vertexAiEvaluationItemEvaluationRequestCandidateResponsesToTerraform, true)(struct!.candidateResponses),
    golden_response: vertexAiEvaluationItemEvaluationRequestGoldenResponseToTerraform(struct!.goldenResponse),
    prompt: vertexAiEvaluationItemEvaluationRequestPromptToTerraform(struct!.prompt),
    rubrics: cdktn.listMapper(vertexAiEvaluationItemEvaluationRequestRubricsToTerraform, true)(struct!.rubrics),
  }
}


export function vertexAiEvaluationItemEvaluationRequestToHclTerraform(struct?: VertexAiEvaluationItemEvaluationRequestOutputReference | VertexAiEvaluationItemEvaluationRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    candidate_responses: {
      value: cdktn.listMapperHcl(vertexAiEvaluationItemEvaluationRequestCandidateResponsesToHclTerraform, true)(struct!.candidateResponses),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestCandidateResponsesList",
    },
    golden_response: {
      value: vertexAiEvaluationItemEvaluationRequestGoldenResponseToHclTerraform(struct!.goldenResponse),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestGoldenResponseList",
    },
    prompt: {
      value: vertexAiEvaluationItemEvaluationRequestPromptToHclTerraform(struct!.prompt),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestPromptList",
    },
    rubrics: {
      value: cdktn.listMapperHcl(vertexAiEvaluationItemEvaluationRequestRubricsToHclTerraform, true)(struct!.rubrics),
      isBlock: true,
      type: "set",
      storageClassType: "VertexAiEvaluationItemEvaluationRequestRubricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEvaluationItemEvaluationRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEvaluationItemEvaluationRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._candidateResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidateResponses = this._candidateResponses?.internalValue;
    }
    if (this._goldenResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goldenResponse = this._goldenResponse?.internalValue;
    }
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._rubrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rubrics = this._rubrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEvaluationItemEvaluationRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._candidateResponses.internalValue = undefined;
      this._goldenResponse.internalValue = undefined;
      this._prompt.internalValue = undefined;
      this._rubrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._candidateResponses.internalValue = value.candidateResponses;
      this._goldenResponse.internalValue = value.goldenResponse;
      this._prompt.internalValue = value.prompt;
      this._rubrics.internalValue = value.rubrics;
    }
  }

  // candidate_responses - computed: false, optional: true, required: false
  private _candidateResponses = new VertexAiEvaluationItemEvaluationRequestCandidateResponsesList(this, "candidate_responses", false);
  public get candidateResponses() {
    return this._candidateResponses;
  }
  public putCandidateResponses(value: VertexAiEvaluationItemEvaluationRequestCandidateResponses[] | cdktn.IResolvable) {
    this._candidateResponses.internalValue = value;
  }
  public resetCandidateResponses() {
    this._candidateResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateResponsesInput() {
    return this._candidateResponses.internalValue;
  }

  // golden_response - computed: false, optional: true, required: false
  private _goldenResponse = new VertexAiEvaluationItemEvaluationRequestGoldenResponseOutputReference(this, "golden_response");
  public get goldenResponse() {
    return this._goldenResponse;
  }
  public putGoldenResponse(value: VertexAiEvaluationItemEvaluationRequestGoldenResponse) {
    this._goldenResponse.internalValue = value;
  }
  public resetGoldenResponse() {
    this._goldenResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenResponseInput() {
    return this._goldenResponse.internalValue;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt = new VertexAiEvaluationItemEvaluationRequestPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: VertexAiEvaluationItemEvaluationRequestPrompt) {
    this._prompt.internalValue = value;
  }
  public resetPrompt() {
    this._prompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // rubrics - computed: false, optional: true, required: false
  private _rubrics = new VertexAiEvaluationItemEvaluationRequestRubricsList(this, "rubrics", true);
  public get rubrics() {
    return this._rubrics;
  }
  public putRubrics(value: VertexAiEvaluationItemEvaluationRequestRubrics[] | cdktn.IResolvable) {
    this._rubrics.internalValue = value;
  }
  public resetRubrics() {
    this._rubrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubricsInput() {
    return this._rubrics.internalValue;
  }
}
export interface VertexAiEvaluationItemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#create VertexAiEvaluationItem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#delete VertexAiEvaluationItem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#update VertexAiEvaluationItem#update}
  */
  readonly update?: string;
}

export function vertexAiEvaluationItemTimeoutsToTerraform(struct?: VertexAiEvaluationItemTimeouts | cdktn.IResolvable): any {
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


export function vertexAiEvaluationItemTimeoutsToHclTerraform(struct?: VertexAiEvaluationItemTimeouts | cdktn.IResolvable): any {
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

export class VertexAiEvaluationItemTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiEvaluationItemTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiEvaluationItemTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item google_vertex_ai_evaluation_item}
*/
export class VertexAiEvaluationItem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_evaluation_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiEvaluationItem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiEvaluationItem to import
  * @param importFromId The id of the existing VertexAiEvaluationItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiEvaluationItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_evaluation_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_evaluation_item google_vertex_ai_evaluation_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiEvaluationItemConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiEvaluationItemConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_evaluation_item',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.11.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._evaluationItemType = config.evaluationItemType;
    this._gcsUri = config.gcsUri;
    this._id = config.id;
    this._labels = config.labels;
    this._metadata = config.metadata;
    this._project = config.project;
    this._region = config.region;
    this._evaluationRequest.internalValue = config.evaluationRequest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // error - computed: true, optional: false, required: false
  private _error = new VertexAiEvaluationItemErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // evaluation_item_type - computed: false, optional: false, required: true
  private _evaluationItemType?: string; 
  public get evaluationItemType() {
    return this.getStringAttribute('evaluation_item_type');
  }
  public set evaluationItemType(value: string) {
    this._evaluationItemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationItemTypeInput() {
    return this._evaluationItemType;
  }

  // evaluation_response - computed: true, optional: false, required: false
  private _evaluationResponse = new VertexAiEvaluationItemEvaluationResponseList(this, "evaluation_response", false);
  public get evaluationResponse() {
    return this._evaluationResponse;
  }

  // gcs_uri - computed: false, optional: true, required: false
  private _gcsUri?: string; 
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }
  public set gcsUri(value: string) {
    this._gcsUri = value;
  }
  public resetGcsUri() {
    this._gcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsUriInput() {
    return this._gcsUri;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // evaluation_request - computed: false, optional: true, required: false
  private _evaluationRequest = new VertexAiEvaluationItemEvaluationRequestOutputReference(this, "evaluation_request");
  public get evaluationRequest() {
    return this._evaluationRequest;
  }
  public putEvaluationRequest(value: VertexAiEvaluationItemEvaluationRequest) {
    this._evaluationRequest.internalValue = value;
  }
  public resetEvaluationRequest() {
    this._evaluationRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationRequestInput() {
    return this._evaluationRequest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiEvaluationItemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiEvaluationItemTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      evaluation_item_type: cdktn.stringToTerraform(this._evaluationItemType),
      gcs_uri: cdktn.stringToTerraform(this._gcsUri),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      metadata: cdktn.stringToTerraform(this._metadata),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      evaluation_request: vertexAiEvaluationItemEvaluationRequestToTerraform(this._evaluationRequest.internalValue),
      timeouts: vertexAiEvaluationItemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      evaluation_item_type: {
        value: cdktn.stringToHclTerraform(this._evaluationItemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcs_uri: {
        value: cdktn.stringToHclTerraform(this._gcsUri),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_request: {
        value: vertexAiEvaluationItemEvaluationRequestToHclTerraform(this._evaluationRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEvaluationItemEvaluationRequestList",
      },
      timeouts: {
        value: vertexAiEvaluationItemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiEvaluationItemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
