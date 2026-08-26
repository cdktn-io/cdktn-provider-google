/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PrivatecaCertificateTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#deletion_policy PrivatecaCertificateTemplate#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. A human-readable description of scenarios this template is intended for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#description PrivatecaCertificateTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#id PrivatecaCertificateTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels with user-defined metadata.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#labels PrivatecaCertificateTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#location PrivatecaCertificateTemplate#location}
  */
  readonly location: string;
  /**
  * Optional. The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#maximum_lifetime PrivatecaCertificateTemplate#maximum_lifetime}
  */
  readonly maximumLifetime?: string;
  /**
  * The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#name PrivatecaCertificateTemplate#name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#project PrivatecaCertificateTemplate#project}
  */
  readonly project?: string;
  /**
  * identity_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#identity_constraints PrivatecaCertificateTemplate#identity_constraints}
  */
  readonly identityConstraints?: PrivatecaCertificateTemplateIdentityConstraints;
  /**
  * passthrough_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#passthrough_extensions PrivatecaCertificateTemplate#passthrough_extensions}
  */
  readonly passthroughExtensions?: PrivatecaCertificateTemplatePassthroughExtensions;
  /**
  * predefined_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#predefined_values PrivatecaCertificateTemplate#predefined_values}
  */
  readonly predefinedValues?: PrivatecaCertificateTemplatePredefinedValues;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#timeouts PrivatecaCertificateTemplate#timeouts}
  */
  readonly timeouts?: PrivatecaCertificateTemplateTimeouts;
}
export interface PrivatecaCertificateTemplateIdentityConstraintsCelExpression {
  /**
  * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#description PrivatecaCertificateTemplate#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#expression PrivatecaCertificateTemplate#expression}
  */
  readonly expression?: string;
  /**
  * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#location PrivatecaCertificateTemplate#location}
  */
  readonly location?: string;
  /**
  * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#title PrivatecaCertificateTemplate#title}
  */
  readonly title?: string;
}

export function privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference | PrivatecaCertificateTemplateIdentityConstraintsCelExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    expression: cdktn.stringToTerraform(struct!.expression),
    location: cdktn.stringToTerraform(struct!.location),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function privatecaCertificateTemplateIdentityConstraintsCelExpressionToHclTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference | PrivatecaCertificateTemplateIdentityConstraintsCelExpression): any {
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
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplateIdentityConstraintsCelExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplateIdentityConstraintsCelExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface PrivatecaCertificateTemplateIdentityConstraints {
  /**
  * Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#allow_subject_alt_names_passthrough PrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}
  */
  readonly allowSubjectAltNamesPassthrough: boolean | cdktn.IResolvable;
  /**
  * Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#allow_subject_passthrough PrivatecaCertificateTemplate#allow_subject_passthrough}
  */
  readonly allowSubjectPassthrough: boolean | cdktn.IResolvable;
  /**
  * cel_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#cel_expression PrivatecaCertificateTemplate#cel_expression}
  */
  readonly celExpression?: PrivatecaCertificateTemplateIdentityConstraintsCelExpression;
}

export function privatecaCertificateTemplateIdentityConstraintsToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsOutputReference | PrivatecaCertificateTemplateIdentityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_subject_alt_names_passthrough: cdktn.booleanToTerraform(struct!.allowSubjectAltNamesPassthrough),
    allow_subject_passthrough: cdktn.booleanToTerraform(struct!.allowSubjectPassthrough),
    cel_expression: privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform(struct!.celExpression),
  }
}


export function privatecaCertificateTemplateIdentityConstraintsToHclTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsOutputReference | PrivatecaCertificateTemplateIdentityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_subject_alt_names_passthrough: {
      value: cdktn.booleanToHclTerraform(struct!.allowSubjectAltNamesPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_subject_passthrough: {
      value: cdktn.booleanToHclTerraform(struct!.allowSubjectPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cel_expression: {
      value: privatecaCertificateTemplateIdentityConstraintsCelExpressionToHclTerraform(struct!.celExpression),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplateIdentityConstraintsCelExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplateIdentityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplateIdentityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSubjectAltNamesPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubjectAltNamesPassthrough = this._allowSubjectAltNamesPassthrough;
    }
    if (this._allowSubjectPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubjectPassthrough = this._allowSubjectPassthrough;
    }
    if (this._celExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.celExpression = this._celExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplateIdentityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSubjectAltNamesPassthrough = undefined;
      this._allowSubjectPassthrough = undefined;
      this._celExpression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSubjectAltNamesPassthrough = value.allowSubjectAltNamesPassthrough;
      this._allowSubjectPassthrough = value.allowSubjectPassthrough;
      this._celExpression.internalValue = value.celExpression;
    }
  }

  // allow_subject_alt_names_passthrough - computed: false, optional: false, required: true
  private _allowSubjectAltNamesPassthrough?: boolean | cdktn.IResolvable; 
  public get allowSubjectAltNamesPassthrough() {
    return this.getBooleanAttribute('allow_subject_alt_names_passthrough');
  }
  public set allowSubjectAltNamesPassthrough(value: boolean | cdktn.IResolvable) {
    this._allowSubjectAltNamesPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectAltNamesPassthroughInput() {
    return this._allowSubjectAltNamesPassthrough;
  }

  // allow_subject_passthrough - computed: false, optional: false, required: true
  private _allowSubjectPassthrough?: boolean | cdktn.IResolvable; 
  public get allowSubjectPassthrough() {
    return this.getBooleanAttribute('allow_subject_passthrough');
  }
  public set allowSubjectPassthrough(value: boolean | cdktn.IResolvable) {
    this._allowSubjectPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectPassthroughInput() {
    return this._allowSubjectPassthrough;
  }

  // cel_expression - computed: false, optional: true, required: false
  private _celExpression = new PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference(this, "cel_expression");
  public get celExpression() {
    return this._celExpression;
  }
  public putCelExpression(value: PrivatecaCertificateTemplateIdentityConstraintsCelExpression) {
    this._celExpression.internalValue = value;
  }
  public resetCelExpression() {
    this._celExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celExpressionInput() {
    return this._celExpression.internalValue;
  }
}
export interface PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_id_path: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToHclTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_id_path: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList extends cdktn.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | cdktn.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference {
    return new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePassthroughExtensions {
  /**
  * Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#known_extensions PrivatecaCertificateTemplate#known_extensions}
  */
  readonly knownExtensions?: string[];
  /**
  * additional_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#additional_extensions PrivatecaCertificateTemplate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | cdktn.IResolvable;
}

export function privatecaCertificateTemplatePassthroughExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsOutputReference | PrivatecaCertificateTemplatePassthroughExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    known_extensions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.knownExtensions),
    additional_extensions: cdktn.listMapper(privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform, true)(struct!.additionalExtensions),
  }
}


export function privatecaCertificateTemplatePassthroughExtensionsToHclTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsOutputReference | PrivatecaCertificateTemplatePassthroughExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    known_extensions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.knownExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_extensions: {
      value: cdktn.listMapperHcl(privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToHclTerraform, true)(struct!.additionalExtensions),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePassthroughExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePassthroughExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownExtensions = this._knownExtensions;
    }
    if (this._additionalExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePassthroughExtensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._knownExtensions = undefined;
      this._additionalExtensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._knownExtensions = value.knownExtensions;
      this._additionalExtensions.internalValue = value.additionalExtensions;
    }
  }

  // known_extensions - computed: false, optional: true, required: false
  private _knownExtensions?: string[]; 
  public get knownExtensions() {
    return this.getListAttribute('known_extensions');
  }
  public set knownExtensions(value: string[]) {
    this._knownExtensions = value;
  }
  public resetKnownExtensions() {
    this._knownExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownExtensionsInput() {
    return this._knownExtensions;
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions = new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }
  public putAdditionalExtensions(value: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | cdktn.IResolvable) {
    this._additionalExtensions.internalValue = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions.internalValue;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_id_path: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_id_path: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectIdPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions {
  /**
  * Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#critical PrivatecaCertificateTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Required. The value of this X.509 extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#value PrivatecaCertificateTemplate#value}
  */
  readonly value: string;
  /**
  * object_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#object_id PrivatecaCertificateTemplate#object_id}
  */
  readonly objectId: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId;
}

export function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    value: cdktn.stringToTerraform(struct!.value),
    object_id: privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}


export function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToHclTerraform(struct!.objectId),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._objectId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._value = undefined;
      this._objectId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._value = value.value;
      this._objectId.internalValue = value.objectId;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId = new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference(this, "object_id");
  public get objectId() {
    return this._objectId;
  }
  public putObjectId(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId) {
    this._objectId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId.internalValue;
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList extends cdktn.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | cdktn.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference {
    return new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesCaOptions {
  /**
  * Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is true, the "CA" in Basic Constraints extension will be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#is_ca PrivatecaCertificateTemplate#is_ca}
  */
  readonly isCa?: boolean | cdktn.IResolvable;
  /**
  * Optional. Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
  * subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#max_issuer_path_length PrivatecaCertificateTemplate#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
  /**
  * Optional. When true, the "CA" in Basic Constraints extension will be set to null and omitted from the CA certificate.
  * If both 'is_ca' and 'null_ca' are unset, the "CA" in Basic Constraints extension will be set to false.
  * Note that the behavior when 'is_ca = false' for this resource is different from the behavior in the Certificate Authority, Certificate and CaPool resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#null_ca PrivatecaCertificateTemplate#null_ca}
  */
  readonly nullCa?: boolean | cdktn.IResolvable;
  /**
  * Optional. When true, the "path length constraint" in Basic Constraints extension will be set to 0.
  * if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
  * the max path length will be omitted from the CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#zero_max_issuer_path_length PrivatecaCertificateTemplate#zero_max_issuer_path_length}
  */
  readonly zeroMaxIssuerPathLength?: boolean | cdktn.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference | PrivatecaCertificateTemplatePredefinedValuesCaOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_ca: cdktn.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktn.numberToTerraform(struct!.maxIssuerPathLength),
    null_ca: cdktn.booleanToTerraform(struct!.nullCa),
    zero_max_issuer_path_length: cdktn.booleanToTerraform(struct!.zeroMaxIssuerPathLength),
  }
}


export function privatecaCertificateTemplatePredefinedValuesCaOptionsToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference | PrivatecaCertificateTemplatePredefinedValuesCaOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_ca: {
      value: cdktn.booleanToHclTerraform(struct!.isCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_issuer_path_length: {
      value: cdktn.numberToHclTerraform(struct!.maxIssuerPathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_ca: {
      value: cdktn.booleanToHclTerraform(struct!.nullCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zero_max_issuer_path_length: {
      value: cdktn.booleanToHclTerraform(struct!.zeroMaxIssuerPathLength),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesCaOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._maxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIssuerPathLength = this._maxIssuerPathLength;
    }
    if (this._nullCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullCa = this._nullCa;
    }
    if (this._zeroMaxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroMaxIssuerPathLength = this._zeroMaxIssuerPathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesCaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isCa = undefined;
      this._maxIssuerPathLength = undefined;
      this._nullCa = undefined;
      this._zeroMaxIssuerPathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isCa = value.isCa;
      this._maxIssuerPathLength = value.maxIssuerPathLength;
      this._nullCa = value.nullCa;
      this._zeroMaxIssuerPathLength = value.zeroMaxIssuerPathLength;
    }
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktn.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktn.IResolvable) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // max_issuer_path_length - computed: false, optional: true, required: false
  private _maxIssuerPathLength?: number; 
  public get maxIssuerPathLength() {
    return this.getNumberAttribute('max_issuer_path_length');
  }
  public set maxIssuerPathLength(value: number) {
    this._maxIssuerPathLength = value;
  }
  public resetMaxIssuerPathLength() {
    this._maxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIssuerPathLengthInput() {
    return this._maxIssuerPathLength;
  }

  // null_ca - computed: false, optional: true, required: false
  private _nullCa?: boolean | cdktn.IResolvable; 
  public get nullCa() {
    return this.getBooleanAttribute('null_ca');
  }
  public set nullCa(value: boolean | cdktn.IResolvable) {
    this._nullCa = value;
  }
  public resetNullCa() {
    this._nullCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullCaInput() {
    return this._nullCa;
  }

  // zero_max_issuer_path_length - computed: false, optional: true, required: false
  private _zeroMaxIssuerPathLength?: boolean | cdktn.IResolvable; 
  public get zeroMaxIssuerPathLength() {
    return this.getBooleanAttribute('zero_max_issuer_path_length');
  }
  public set zeroMaxIssuerPathLength(value: boolean | cdktn.IResolvable) {
    this._zeroMaxIssuerPathLength = value;
  }
  public resetZeroMaxIssuerPathLength() {
    this._zeroMaxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroMaxIssuerPathLengthInput() {
    return this._zeroMaxIssuerPathLength;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#cert_sign PrivatecaCertificateTemplate#cert_sign}
  */
  readonly certSign?: boolean | cdktn.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#content_commitment PrivatecaCertificateTemplate#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktn.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#crl_sign PrivatecaCertificateTemplate#crl_sign}
  */
  readonly crlSign?: boolean | cdktn.IResolvable;
  /**
  * The key may be used to encipher data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#data_encipherment PrivatecaCertificateTemplate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktn.IResolvable;
  /**
  * The key may be used to decipher only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#decipher_only PrivatecaCertificateTemplate#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktn.IResolvable;
  /**
  * The key may be used for digital signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#digital_signature PrivatecaCertificateTemplate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktn.IResolvable;
  /**
  * The key may be used to encipher only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#encipher_only PrivatecaCertificateTemplate#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktn.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#key_agreement PrivatecaCertificateTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * The key may be used to encipher other keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#key_encipherment PrivatecaCertificateTemplate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktn.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert_sign: cdktn.booleanToTerraform(struct!.certSign),
    content_commitment: cdktn.booleanToTerraform(struct!.contentCommitment),
    crl_sign: cdktn.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktn.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktn.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
  }
}


export function privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert_sign: {
      value: cdktn.booleanToHclTerraform(struct!.certSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_commitment: {
      value: cdktn.booleanToHclTerraform(struct!.contentCommitment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_sign: {
      value: cdktn.booleanToHclTerraform(struct!.crlSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decipher_only: {
      value: cdktn.booleanToHclTerraform(struct!.decipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktn.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encipher_only: {
      value: cdktn.booleanToHclTerraform(struct!.encipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSign = this._certSign;
    }
    if (this._contentCommitment !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCommitment = this._contentCommitment;
    }
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certSign = undefined;
      this._contentCommitment = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certSign = value.certSign;
      this._contentCommitment = value.contentCommitment;
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
    }
  }

  // cert_sign - computed: false, optional: true, required: false
  private _certSign?: boolean | cdktn.IResolvable; 
  public get certSign() {
    return this.getBooleanAttribute('cert_sign');
  }
  public set certSign(value: boolean | cdktn.IResolvable) {
    this._certSign = value;
  }
  public resetCertSign() {
    this._certSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSignInput() {
    return this._certSign;
  }

  // content_commitment - computed: false, optional: true, required: false
  private _contentCommitment?: boolean | cdktn.IResolvable; 
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment');
  }
  public set contentCommitment(value: boolean | cdktn.IResolvable) {
    this._contentCommitment = value;
  }
  public resetContentCommitment() {
    this._contentCommitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCommitmentInput() {
    return this._contentCommitment;
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktn.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktn.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktn.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktn.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktn.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktn.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktn.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktn.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktn.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktn.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktn.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktn.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktn.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktn.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#client_auth PrivatecaCertificateTemplate#client_auth}
  */
  readonly clientAuth?: boolean | cdktn.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#code_signing PrivatecaCertificateTemplate#code_signing}
  */
  readonly codeSigning?: boolean | cdktn.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#email_protection PrivatecaCertificateTemplate#email_protection}
  */
  readonly emailProtection?: boolean | cdktn.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#ocsp_signing PrivatecaCertificateTemplate#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktn.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#server_auth PrivatecaCertificateTemplate#server_auth}
  */
  readonly serverAuth?: boolean | cdktn.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#time_stamping PrivatecaCertificateTemplate#time_stamping}
  */
  readonly timeStamping?: boolean | cdktn.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_auth: cdktn.booleanToTerraform(struct!.clientAuth),
    code_signing: cdktn.booleanToTerraform(struct!.codeSigning),
    email_protection: cdktn.booleanToTerraform(struct!.emailProtection),
    ocsp_signing: cdktn.booleanToTerraform(struct!.ocspSigning),
    server_auth: cdktn.booleanToTerraform(struct!.serverAuth),
    time_stamping: cdktn.booleanToTerraform(struct!.timeStamping),
  }
}


export function privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_auth: {
      value: cdktn.booleanToHclTerraform(struct!.clientAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_signing: {
      value: cdktn.booleanToHclTerraform(struct!.codeSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email_protection: {
      value: cdktn.booleanToHclTerraform(struct!.emailProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_signing: {
      value: cdktn.booleanToHclTerraform(struct!.ocspSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_auth: {
      value: cdktn.booleanToHclTerraform(struct!.serverAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_stamping: {
      value: cdktn.booleanToHclTerraform(struct!.timeStamping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._codeSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigning = this._codeSigning;
    }
    if (this._emailProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailProtection = this._emailProtection;
    }
    if (this._ocspSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSigning = this._ocspSigning;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._timeStamping !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStamping = this._timeStamping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuth = undefined;
      this._codeSigning = undefined;
      this._emailProtection = undefined;
      this._ocspSigning = undefined;
      this._serverAuth = undefined;
      this._timeStamping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuth = value.clientAuth;
      this._codeSigning = value.codeSigning;
      this._emailProtection = value.emailProtection;
      this._ocspSigning = value.ocspSigning;
      this._serverAuth = value.serverAuth;
      this._timeStamping = value.timeStamping;
    }
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: boolean | cdktn.IResolvable; 
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth');
  }
  public set clientAuth(value: boolean | cdktn.IResolvable) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // code_signing - computed: false, optional: true, required: false
  private _codeSigning?: boolean | cdktn.IResolvable; 
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing');
  }
  public set codeSigning(value: boolean | cdktn.IResolvable) {
    this._codeSigning = value;
  }
  public resetCodeSigning() {
    this._codeSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningInput() {
    return this._codeSigning;
  }

  // email_protection - computed: false, optional: true, required: false
  private _emailProtection?: boolean | cdktn.IResolvable; 
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection');
  }
  public set emailProtection(value: boolean | cdktn.IResolvable) {
    this._emailProtection = value;
  }
  public resetEmailProtection() {
    this._emailProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtectionInput() {
    return this._emailProtection;
  }

  // ocsp_signing - computed: false, optional: true, required: false
  private _ocspSigning?: boolean | cdktn.IResolvable; 
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing');
  }
  public set ocspSigning(value: boolean | cdktn.IResolvable) {
    this._ocspSigning = value;
  }
  public resetOcspSigning() {
    this._ocspSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSigningInput() {
    return this._ocspSigning;
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: boolean | cdktn.IResolvable; 
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth');
  }
  public set serverAuth(value: boolean | cdktn.IResolvable) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth;
  }

  // time_stamping - computed: false, optional: true, required: false
  private _timeStamping?: boolean | cdktn.IResolvable; 
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping');
  }
  public set timeStamping(value: boolean | cdktn.IResolvable) {
    this._timeStamping = value;
  }
  public resetTimeStamping() {
    this._timeStamping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampingInput() {
    return this._timeStamping;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_id_path: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_id_path: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList extends cdktn.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | cdktn.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference {
    return new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsage {
  /**
  * base_key_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#base_key_usage PrivatecaCertificateTemplate#base_key_usage}
  */
  readonly baseKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#extended_key_usage PrivatecaCertificateTemplate#extended_key_usage}
  */
  readonly extendedKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#unknown_extended_key_usages PrivatecaCertificateTemplate#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | cdktn.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktn.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform, true)(struct!.unknownExtendedKeyUsages),
  }
}


export function privatecaCertificateTemplatePredefinedValuesKeyUsageToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_key_usage: {
      value: privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToHclTerraform(struct!.baseKeyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageList",
    },
    extended_key_usage: {
      value: privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToHclTerraform(struct!.extendedKeyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageList",
    },
    unknown_extended_key_usages: {
      value: cdktn.listMapperHcl(privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToHclTerraform, true)(struct!.unknownExtendedKeyUsages),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseKeyUsage = this._baseKeyUsage?.internalValue;
    }
    if (this._extendedKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage?.internalValue;
    }
    if (this._unknownExtendedKeyUsages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownExtendedKeyUsages = this._unknownExtendedKeyUsages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseKeyUsage.internalValue = undefined;
      this._extendedKeyUsage.internalValue = undefined;
      this._unknownExtendedKeyUsages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseKeyUsage.internalValue = value.baseKeyUsage;
      this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
      this._unknownExtendedKeyUsages.internalValue = value.unknownExtendedKeyUsages;
    }
  }

  // base_key_usage - computed: false, optional: true, required: false
  private _baseKeyUsage = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference(this, "base_key_usage");
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }
  public putBaseKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage) {
    this._baseKeyUsage.internalValue = value;
  }
  public resetBaseKeyUsage() {
    this._baseKeyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage.internalValue;
  }

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference(this, "extended_key_usage");
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage.internalValue = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList(this, "unknown_extended_key_usages", false);
  public get unknownExtendedKeyUsages() {
    return this._unknownExtendedKeyUsages;
  }
  public putUnknownExtendedKeyUsages(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | cdktn.IResolvable) {
    this._unknownExtendedKeyUsages.internalValue = value;
  }
  public resetUnknownExtendedKeyUsages() {
    this._unknownExtendedKeyUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtendedKeyUsagesInput() {
    return this._unknownExtendedKeyUsages.internalValue;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesNameConstraints {
  /**
  * Indicates whether or not the name constraints are marked critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#critical PrivatecaCertificateTemplate#critical}
  */
  readonly critical: boolean | cdktn.IResolvable;
  /**
  * Contains excluded DNS names. Any DNS name that can be
  * constructed by simply adding zero or more labels to
  * the left-hand side of the name satisfies the name constraint.
  * For example, 'example.com', 'www.example.com', 'www.sub.example.com'
  * would satisfy 'example.com' while 'example1.com' does not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#excluded_dns_names PrivatecaCertificateTemplate#excluded_dns_names}
  */
  readonly excludedDnsNames?: string[];
  /**
  * Contains the excluded email addresses. The value can be a particular
  * email address, a hostname to indicate all email addresses on that host or
  * a domain with a leading period (e.g. '.example.com') to indicate
  * all email addresses in that domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#excluded_email_addresses PrivatecaCertificateTemplate#excluded_email_addresses}
  */
  readonly excludedEmailAddresses?: string[];
  /**
  * Contains the excluded IP ranges. For IPv4 addresses, the ranges
  * are expressed using CIDR notation as specified in RFC 4632.
  * For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
  * addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#excluded_ip_ranges PrivatecaCertificateTemplate#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: string[];
  /**
  * Contains the excluded URIs that apply to the host part of the name.
  * The value can be a hostname or a domain with a
  * leading period (like '.example.com')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#excluded_uris PrivatecaCertificateTemplate#excluded_uris}
  */
  readonly excludedUris?: string[];
  /**
  * Contains permitted DNS names. Any DNS name that can be
  * constructed by simply adding zero or more labels to
  * the left-hand side of the name satisfies the name constraint.
  * For example, 'example.com', 'www.example.com', 'www.sub.example.com'
  * would satisfy 'example.com' while 'example1.com' does not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#permitted_dns_names PrivatecaCertificateTemplate#permitted_dns_names}
  */
  readonly permittedDnsNames?: string[];
  /**
  * Contains the permitted email addresses. The value can be a particular
  * email address, a hostname to indicate all email addresses on that host or
  * a domain with a leading period (e.g. '.example.com') to indicate
  * all email addresses in that domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#permitted_email_addresses PrivatecaCertificateTemplate#permitted_email_addresses}
  */
  readonly permittedEmailAddresses?: string[];
  /**
  * Contains the permitted IP ranges. For IPv4 addresses, the ranges
  * are expressed using CIDR notation as specified in RFC 4632.
  * For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
  * addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#permitted_ip_ranges PrivatecaCertificateTemplate#permitted_ip_ranges}
  */
  readonly permittedIpRanges?: string[];
  /**
  * Contains the permitted URIs that apply to the host part of the name.
  * The value can be a hostname or a domain with a
  * leading period (like '.example.com')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#permitted_uris PrivatecaCertificateTemplate#permitted_uris}
  */
  readonly permittedUris?: string[];
}

export function privatecaCertificateTemplatePredefinedValuesNameConstraintsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference | PrivatecaCertificateTemplatePredefinedValuesNameConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    excluded_dns_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedDnsNames),
    excluded_email_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedEmailAddresses),
    excluded_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedIpRanges),
    excluded_uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedUris),
    permitted_dns_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permittedDnsNames),
    permitted_email_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permittedEmailAddresses),
    permitted_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permittedIpRanges),
    permitted_uris: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permittedUris),
  }
}


export function privatecaCertificateTemplatePredefinedValuesNameConstraintsToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference | PrivatecaCertificateTemplatePredefinedValuesNameConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_dns_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedDnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_email_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedEmailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_uris: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_dns_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permittedDnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_email_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permittedEmailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permittedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    permitted_uris: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permittedUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesNameConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._excludedDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedDnsNames = this._excludedDnsNames;
    }
    if (this._excludedEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEmailAddresses = this._excludedEmailAddresses;
    }
    if (this._excludedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedIpRanges = this._excludedIpRanges;
    }
    if (this._excludedUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedUris = this._excludedUris;
    }
    if (this._permittedDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedDnsNames = this._permittedDnsNames;
    }
    if (this._permittedEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedEmailAddresses = this._permittedEmailAddresses;
    }
    if (this._permittedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedIpRanges = this._permittedIpRanges;
    }
    if (this._permittedUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedUris = this._permittedUris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesNameConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._excludedDnsNames = undefined;
      this._excludedEmailAddresses = undefined;
      this._excludedIpRanges = undefined;
      this._excludedUris = undefined;
      this._permittedDnsNames = undefined;
      this._permittedEmailAddresses = undefined;
      this._permittedIpRanges = undefined;
      this._permittedUris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._excludedDnsNames = value.excludedDnsNames;
      this._excludedEmailAddresses = value.excludedEmailAddresses;
      this._excludedIpRanges = value.excludedIpRanges;
      this._excludedUris = value.excludedUris;
      this._permittedDnsNames = value.permittedDnsNames;
      this._permittedEmailAddresses = value.permittedEmailAddresses;
      this._permittedIpRanges = value.permittedIpRanges;
      this._permittedUris = value.permittedUris;
    }
  }

  // critical - computed: false, optional: false, required: true
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // excluded_dns_names - computed: false, optional: true, required: false
  private _excludedDnsNames?: string[]; 
  public get excludedDnsNames() {
    return this.getListAttribute('excluded_dns_names');
  }
  public set excludedDnsNames(value: string[]) {
    this._excludedDnsNames = value;
  }
  public resetExcludedDnsNames() {
    this._excludedDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDnsNamesInput() {
    return this._excludedDnsNames;
  }

  // excluded_email_addresses - computed: false, optional: true, required: false
  private _excludedEmailAddresses?: string[]; 
  public get excludedEmailAddresses() {
    return this.getListAttribute('excluded_email_addresses');
  }
  public set excludedEmailAddresses(value: string[]) {
    this._excludedEmailAddresses = value;
  }
  public resetExcludedEmailAddresses() {
    this._excludedEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEmailAddressesInput() {
    return this._excludedEmailAddresses;
  }

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges?: string[]; 
  public get excludedIpRanges() {
    return this.getListAttribute('excluded_ip_ranges');
  }
  public set excludedIpRanges(value: string[]) {
    this._excludedIpRanges = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges;
  }

  // excluded_uris - computed: false, optional: true, required: false
  private _excludedUris?: string[]; 
  public get excludedUris() {
    return this.getListAttribute('excluded_uris');
  }
  public set excludedUris(value: string[]) {
    this._excludedUris = value;
  }
  public resetExcludedUris() {
    this._excludedUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUrisInput() {
    return this._excludedUris;
  }

  // permitted_dns_names - computed: false, optional: true, required: false
  private _permittedDnsNames?: string[]; 
  public get permittedDnsNames() {
    return this.getListAttribute('permitted_dns_names');
  }
  public set permittedDnsNames(value: string[]) {
    this._permittedDnsNames = value;
  }
  public resetPermittedDnsNames() {
    this._permittedDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedDnsNamesInput() {
    return this._permittedDnsNames;
  }

  // permitted_email_addresses - computed: false, optional: true, required: false
  private _permittedEmailAddresses?: string[]; 
  public get permittedEmailAddresses() {
    return this.getListAttribute('permitted_email_addresses');
  }
  public set permittedEmailAddresses(value: string[]) {
    this._permittedEmailAddresses = value;
  }
  public resetPermittedEmailAddresses() {
    this._permittedEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedEmailAddressesInput() {
    return this._permittedEmailAddresses;
  }

  // permitted_ip_ranges - computed: false, optional: true, required: false
  private _permittedIpRanges?: string[]; 
  public get permittedIpRanges() {
    return this.getListAttribute('permitted_ip_ranges');
  }
  public set permittedIpRanges(value: string[]) {
    this._permittedIpRanges = value;
  }
  public resetPermittedIpRanges() {
    this._permittedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedIpRangesInput() {
    return this._permittedIpRanges;
  }

  // permitted_uris - computed: false, optional: true, required: false
  private _permittedUris?: string[]; 
  public get permittedUris() {
    return this.getListAttribute('permitted_uris');
  }
  public set permittedUris(value: string[]) {
    this._permittedUris = value;
  }
  public resetPermittedUris() {
    this._permittedUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedUrisInput() {
    return this._permittedUris;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesPolicyIds {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_id_path: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.objectIdPath),
  }
}


export function privatecaCertificateTemplatePredefinedValuesPolicyIdsToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_id_path: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.objectIdPath),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList extends cdktn.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | cdktn.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference {
    return new PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePredefinedValues {
  /**
  * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#aia_ocsp_servers PrivatecaCertificateTemplate#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#additional_extensions PrivatecaCertificateTemplate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | cdktn.IResolvable;
  /**
  * ca_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#ca_options PrivatecaCertificateTemplate#ca_options}
  */
  readonly caOptions?: PrivatecaCertificateTemplatePredefinedValuesCaOptions;
  /**
  * key_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#key_usage PrivatecaCertificateTemplate#key_usage}
  */
  readonly keyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsage;
  /**
  * name_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#name_constraints PrivatecaCertificateTemplate#name_constraints}
  */
  readonly nameConstraints?: PrivatecaCertificateTemplatePredefinedValuesNameConstraints;
  /**
  * policy_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#policy_ids PrivatecaCertificateTemplate#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | cdktn.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesOutputReference | PrivatecaCertificateTemplatePredefinedValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aia_ocsp_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aiaOcspServers),
    additional_extensions: cdktn.listMapper(privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform, true)(struct!.additionalExtensions),
    ca_options: privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct!.keyUsage),
    name_constraints: privatecaCertificateTemplatePredefinedValuesNameConstraintsToTerraform(struct!.nameConstraints),
    policy_ids: cdktn.listMapper(privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform, true)(struct!.policyIds),
  }
}


export function privatecaCertificateTemplatePredefinedValuesToHclTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesOutputReference | PrivatecaCertificateTemplatePredefinedValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aia_ocsp_servers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aiaOcspServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_extensions: {
      value: cdktn.listMapperHcl(privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToHclTerraform, true)(struct!.additionalExtensions),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList",
    },
    ca_options: {
      value: privatecaCertificateTemplatePredefinedValuesCaOptionsToHclTerraform(struct!.caOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesCaOptionsList",
    },
    key_usage: {
      value: privatecaCertificateTemplatePredefinedValuesKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesKeyUsageList",
    },
    name_constraints: {
      value: privatecaCertificateTemplatePredefinedValuesNameConstraintsToHclTerraform(struct!.nameConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesNameConstraintsList",
    },
    policy_ids: {
      value: cdktn.listMapperHcl(privatecaCertificateTemplatePredefinedValuesPolicyIdsToHclTerraform, true)(struct!.policyIds),
      isBlock: true,
      type: "list",
      storageClassType: "PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecaCertificateTemplatePredefinedValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiaOcspServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiaOcspServers = this._aiaOcspServers;
    }
    if (this._additionalExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions?.internalValue;
    }
    if (this._caOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caOptions = this._caOptions?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._nameConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameConstraints = this._nameConstraints?.internalValue;
    }
    if (this._policyIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyIds = this._policyIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiaOcspServers = undefined;
      this._additionalExtensions.internalValue = undefined;
      this._caOptions.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._nameConstraints.internalValue = undefined;
      this._policyIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiaOcspServers = value.aiaOcspServers;
      this._additionalExtensions.internalValue = value.additionalExtensions;
      this._caOptions.internalValue = value.caOptions;
      this._keyUsage.internalValue = value.keyUsage;
      this._nameConstraints.internalValue = value.nameConstraints;
      this._policyIds.internalValue = value.policyIds;
    }
  }

  // aia_ocsp_servers - computed: false, optional: true, required: false
  private _aiaOcspServers?: string[]; 
  public get aiaOcspServers() {
    return this.getListAttribute('aia_ocsp_servers');
  }
  public set aiaOcspServers(value: string[]) {
    this._aiaOcspServers = value;
  }
  public resetAiaOcspServers() {
    this._aiaOcspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiaOcspServersInput() {
    return this._aiaOcspServers;
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions = new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }
  public putAdditionalExtensions(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | cdktn.IResolvable) {
    this._additionalExtensions.internalValue = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions.internalValue;
  }

  // ca_options - computed: false, optional: true, required: false
  private _caOptions = new PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference(this, "ca_options");
  public get caOptions() {
    return this._caOptions;
  }
  public putCaOptions(value: PrivatecaCertificateTemplatePredefinedValuesCaOptions) {
    this._caOptions.internalValue = value;
  }
  public resetCaOptions() {
    this._caOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions.internalValue;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // name_constraints - computed: false, optional: true, required: false
  private _nameConstraints = new PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference(this, "name_constraints");
  public get nameConstraints() {
    return this._nameConstraints;
  }
  public putNameConstraints(value: PrivatecaCertificateTemplatePredefinedValuesNameConstraints) {
    this._nameConstraints.internalValue = value;
  }
  public resetNameConstraints() {
    this._nameConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameConstraintsInput() {
    return this._nameConstraints.internalValue;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds = new PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList(this, "policy_ids", false);
  public get policyIds() {
    return this._policyIds;
  }
  public putPolicyIds(value: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | cdktn.IResolvable) {
    this._policyIds.internalValue = value;
  }
  public resetPolicyIds() {
    this._policyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds.internalValue;
  }
}
export interface PrivatecaCertificateTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#create PrivatecaCertificateTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#delete PrivatecaCertificateTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#update PrivatecaCertificateTemplate#update}
  */
  readonly update?: string;
}

export function privatecaCertificateTemplateTimeoutsToTerraform(struct?: PrivatecaCertificateTemplateTimeouts | cdktn.IResolvable): any {
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


export function privatecaCertificateTemplateTimeoutsToHclTerraform(struct?: PrivatecaCertificateTemplateTimeouts | cdktn.IResolvable): any {
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

export class PrivatecaCertificateTemplateTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivatecaCertificateTemplateTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PrivatecaCertificateTemplateTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template google_privateca_certificate_template}
*/
export class PrivatecaCertificateTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privateca_certificate_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PrivatecaCertificateTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatecaCertificateTemplate to import
  * @param importFromId The id of the existing PrivatecaCertificateTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatecaCertificateTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_privateca_certificate_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/privateca_certificate_template google_privateca_certificate_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCertificateTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCertificateTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._maximumLifetime = config.maximumLifetime;
    this._name = config.name;
    this._project = config.project;
    this._identityConstraints.internalValue = config.identityConstraints;
    this._passthroughExtensions.internalValue = config.passthroughExtensions;
    this._predefinedValues.internalValue = config.predefinedValues;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // maximum_lifetime - computed: false, optional: true, required: false
  private _maximumLifetime?: string; 
  public get maximumLifetime() {
    return this.getStringAttribute('maximum_lifetime');
  }
  public set maximumLifetime(value: string) {
    this._maximumLifetime = value;
  }
  public resetMaximumLifetime() {
    this._maximumLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLifetimeInput() {
    return this._maximumLifetime;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints = new PrivatecaCertificateTemplateIdentityConstraintsOutputReference(this, "identity_constraints");
  public get identityConstraints() {
    return this._identityConstraints;
  }
  public putIdentityConstraints(value: PrivatecaCertificateTemplateIdentityConstraints) {
    this._identityConstraints.internalValue = value;
  }
  public resetIdentityConstraints() {
    this._identityConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConstraintsInput() {
    return this._identityConstraints.internalValue;
  }

  // passthrough_extensions - computed: false, optional: true, required: false
  private _passthroughExtensions = new PrivatecaCertificateTemplatePassthroughExtensionsOutputReference(this, "passthrough_extensions");
  public get passthroughExtensions() {
    return this._passthroughExtensions;
  }
  public putPassthroughExtensions(value: PrivatecaCertificateTemplatePassthroughExtensions) {
    this._passthroughExtensions.internalValue = value;
  }
  public resetPassthroughExtensions() {
    this._passthroughExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughExtensionsInput() {
    return this._passthroughExtensions.internalValue;
  }

  // predefined_values - computed: false, optional: true, required: false
  private _predefinedValues = new PrivatecaCertificateTemplatePredefinedValuesOutputReference(this, "predefined_values");
  public get predefinedValues() {
    return this._predefinedValues;
  }
  public putPredefinedValues(value: PrivatecaCertificateTemplatePredefinedValues) {
    this._predefinedValues.internalValue = value;
  }
  public resetPredefinedValues() {
    this._predefinedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedValuesInput() {
    return this._predefinedValues.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatecaCertificateTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatecaCertificateTemplateTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      maximum_lifetime: cdktn.stringToTerraform(this._maximumLifetime),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      identity_constraints: privatecaCertificateTemplateIdentityConstraintsToTerraform(this._identityConstraints.internalValue),
      passthrough_extensions: privatecaCertificateTemplatePassthroughExtensionsToTerraform(this._passthroughExtensions.internalValue),
      predefined_values: privatecaCertificateTemplatePredefinedValuesToTerraform(this._predefinedValues.internalValue),
      timeouts: privatecaCertificateTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_lifetime: {
        value: cdktn.stringToHclTerraform(this._maximumLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      identity_constraints: {
        value: privatecaCertificateTemplateIdentityConstraintsToHclTerraform(this._identityConstraints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivatecaCertificateTemplateIdentityConstraintsList",
      },
      passthrough_extensions: {
        value: privatecaCertificateTemplatePassthroughExtensionsToHclTerraform(this._passthroughExtensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivatecaCertificateTemplatePassthroughExtensionsList",
      },
      predefined_values: {
        value: privatecaCertificateTemplatePredefinedValuesToHclTerraform(this._predefinedValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivatecaCertificateTemplatePredefinedValuesList",
      },
      timeouts: {
        value: privatecaCertificateTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivatecaCertificateTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
