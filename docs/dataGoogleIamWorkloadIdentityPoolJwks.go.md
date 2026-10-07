# `dataGoogleIamWorkloadIdentityPoolJwks` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolJwks` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolJwks <a name="DataGoogleIamWorkloadIdentityPoolJwks" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.NewDataGoogleIamWorkloadIdentityPoolJwks(scope Construct, id *string, config DataGoogleIamWorkloadIdentityPoolJwksConfig) DataGoogleIamWorkloadIdentityPoolJwks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig">DataGoogleIamWorkloadIdentityPoolJwksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig">DataGoogleIamWorkloadIdentityPoolJwksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts"></a>

```go
func PutTimeouts(value DataGoogleIamWorkloadIdentityPoolJwksTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwks_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolJwks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleIamWorkloadIdentityPoolJwks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolJwks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys">Keys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys"></a>

```go
func Keys() DataGoogleIamWorkloadIdentityPoolJwksKeysList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts"></a>

```go
func Timeouts() DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolJwksConfig <a name="DataGoogleIamWorkloadIdentityPoolJwksConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

&datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts"></a>

```go
Timeouts DataGoogleIamWorkloadIdentityPoolJwksTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

### DataGoogleIamWorkloadIdentityPoolJwksKeys <a name="DataGoogleIamWorkloadIdentityPoolJwksKeys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

&datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwksKeys {

}
```


### DataGoogleIamWorkloadIdentityPoolJwksTimeouts <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

&datagoogleiamworkloadidentitypooljwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolJwksKeysList <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.NewDataGoogleIamWorkloadIdentityPoolJwksKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolJwksKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.NewDataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg">Alg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e">E</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty">Kty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n">N</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use">Use</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alg`<sup>Required</sup> <a name="Alg" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg"></a>

```go
func Alg() *string
```

- *Type:* *string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e"></a>

```go
func E() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty"></a>

```go
func Kty() *string
```

- *Type:* *string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n"></a>

```go
func N() *string
```

- *Type:* *string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use"></a>

```go
func Use() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolJwksKeys
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a>

---


### DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagoogleiamworkloadidentitypooljwks"

datagoogleiamworkloadidentitypooljwks.NewDataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



