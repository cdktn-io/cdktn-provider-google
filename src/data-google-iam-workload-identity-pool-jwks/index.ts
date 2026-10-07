/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleIamWorkloadIdentityPoolJwksConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}
  */
  readonly resourceName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}
  */
  readonly timeouts?: DataGoogleIamWorkloadIdentityPoolJwksTimeouts;
}
export interface DataGoogleIamWorkloadIdentityPoolJwksKeys {
}

export function dataGoogleIamWorkloadIdentityPoolJwksKeysToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolJwksKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolJwksKeysToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolJwksKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolJwksKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolJwksKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }
}

export class DataGoogleIamWorkloadIdentityPoolJwksKeysList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolJwksTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}
  */
  readonly read?: string;
}

export function dataGoogleIamWorkloadIdentityPoolJwksTimeoutsToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolJwksTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataGoogleIamWorkloadIdentityPoolJwksTimeoutsToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolJwksTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolJwksTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolJwksTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks}
*/
export class DataGoogleIamWorkloadIdentityPoolJwks extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_jwks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolJwks to import
  * @param importFromId The id of the existing DataGoogleIamWorkloadIdentityPoolJwks that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolJwks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool_jwks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamWorkloadIdentityPoolJwksConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolJwksConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool_jwks',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.6.0',
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
    this._id = config.id;
    this._resourceName = config.resourceName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // jwks_json - computed: true, optional: false, required: false
  public get jwksJson() {
    return this.getStringAttribute('jwks_json');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataGoogleIamWorkloadIdentityPoolJwksKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataGoogleIamWorkloadIdentityPoolJwksTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      resource_name: cdktn.stringToTerraform(this._resourceName),
      timeouts: dataGoogleIamWorkloadIdentityPoolJwksTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktn.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataGoogleIamWorkloadIdentityPoolJwksTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataGoogleIamWorkloadIdentityPoolJwksTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
