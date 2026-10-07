# `dataGoogleBiglakeHiveTableIamPolicy` Submodule <a name="`dataGoogleBiglakeHiveTableIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBiglakeHiveTableIamPolicy <a name="DataGoogleBiglakeHiveTableIamPolicy" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy google_biglake_hive_table_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivetableiampolicy"

datagooglebiglakehivetableiampolicy.NewDataGoogleBiglakeHiveTableIamPolicy(scope Construct, id *string, config DataGoogleBiglakeHiveTableIamPolicyConfig) DataGoogleBiglakeHiveTableIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig">DataGoogleBiglakeHiveTableIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig">DataGoogleBiglakeHiveTableIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBiglakeHiveTableIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivetableiampolicy"

datagooglebiglakehivetableiampolicy.DataGoogleBiglakeHiveTableIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivetableiampolicy"

datagooglebiglakehivetableiampolicy.DataGoogleBiglakeHiveTableIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivetableiampolicy"

datagooglebiglakehivetableiampolicy.DataGoogleBiglakeHiveTableIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivetableiampolicy"

datagooglebiglakehivetableiampolicy.DataGoogleBiglakeHiveTableIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBiglakeHiveTableIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBiglakeHiveTableIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBiglakeHiveTableIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBiglakeHiveTableIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBiglakeHiveTableIamPolicyConfig <a name="DataGoogleBiglakeHiveTableIamPolicyConfig" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivetableiampolicy"

&datagooglebiglakehivetableiampolicy.DataGoogleBiglakeHiveTableIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	Database: *string,
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#catalog DataGoogleBiglakeHiveTableIamPolicy#catalog}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#database DataGoogleBiglakeHiveTableIamPolicy#database}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#name DataGoogleBiglakeHiveTableIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#id DataGoogleBiglakeHiveTableIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#project DataGoogleBiglakeHiveTableIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#catalog DataGoogleBiglakeHiveTableIamPolicy#catalog}.

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#database DataGoogleBiglakeHiveTableIamPolicy#database}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#name DataGoogleBiglakeHiveTableIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#id DataGoogleBiglakeHiveTableIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBiglakeHiveTableIamPolicy.DataGoogleBiglakeHiveTableIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_table_iam_policy#project DataGoogleBiglakeHiveTableIamPolicy#project}.

---



