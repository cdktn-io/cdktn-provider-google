# `dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config google_iam_workload_identity_pool_openid_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleiamworkloadidentitypoolopenidconfig"

datagoogleiamworkloadidentitypoolopenidconfig.NewDataGoogleIamWorkloadIdentityPoolOpenidConfig(scope Construct, id *string, config DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig) DataGoogleIamWorkloadIdentityPoolOpenidConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig">DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig">DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleiamworkloadidentitypoolopenidconfig"

datagoogleiamworkloadidentitypoolopenidconfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleiamworkloadidentitypoolopenidconfig"

datagoogleiamworkloadidentitypoolopenidconfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleiamworkloadidentitypoolopenidconfig"

datagoogleiamworkloadidentitypoolopenidconfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleiamworkloadidentitypoolopenidconfig"

datagoogleiamworkloadidentitypoolopenidconfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleIamWorkloadIdentityPoolOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported">IdTokenSigningAlgValuesSupported</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported">ResponseTypesSupported</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported">SubjectTypesSupported</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `IdTokenSigningAlgValuesSupported`<sup>Required</sup> <a name="IdTokenSigningAlgValuesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```go
func IdTokenSigningAlgValuesSupported() *[]*string
```

- *Type:* *[]*string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `ResponseTypesSupported`<sup>Required</sup> <a name="ResponseTypesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported"></a>

```go
func ResponseTypesSupported() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectTypesSupported`<sup>Required</sup> <a name="SubjectTypesSupported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported"></a>

```go
func SubjectTypesSupported() *[]*string
```

- *Type:* *[]*string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleiamworkloadidentitypoolopenidconfig"

&datagoogleiamworkloadidentitypoolopenidconfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | The OIDC discovery URI. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

The OIDC discovery URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#resource_name DataGoogleIamWorkloadIdentityPoolOpenidConfig#resource_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



