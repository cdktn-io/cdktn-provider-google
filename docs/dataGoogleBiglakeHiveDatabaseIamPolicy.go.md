# `dataGoogleBiglakeHiveDatabaseIamPolicy` Submodule <a name="`dataGoogleBiglakeHiveDatabaseIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBiglakeHiveDatabaseIamPolicy <a name="DataGoogleBiglakeHiveDatabaseIamPolicy" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy google_biglake_hive_database_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivedatabaseiampolicy"

datagooglebiglakehivedatabaseiampolicy.NewDataGoogleBiglakeHiveDatabaseIamPolicy(scope Construct, id *string, config DataGoogleBiglakeHiveDatabaseIamPolicyConfig) DataGoogleBiglakeHiveDatabaseIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig">DataGoogleBiglakeHiveDatabaseIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig">DataGoogleBiglakeHiveDatabaseIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBiglakeHiveDatabaseIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivedatabaseiampolicy"

datagooglebiglakehivedatabaseiampolicy.DataGoogleBiglakeHiveDatabaseIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivedatabaseiampolicy"

datagooglebiglakehivedatabaseiampolicy.DataGoogleBiglakeHiveDatabaseIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivedatabaseiampolicy"

datagooglebiglakehivedatabaseiampolicy.DataGoogleBiglakeHiveDatabaseIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivedatabaseiampolicy"

datagooglebiglakehivedatabaseiampolicy.DataGoogleBiglakeHiveDatabaseIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBiglakeHiveDatabaseIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBiglakeHiveDatabaseIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBiglakeHiveDatabaseIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBiglakeHiveDatabaseIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBiglakeHiveDatabaseIamPolicyConfig <a name="DataGoogleBiglakeHiveDatabaseIamPolicyConfig" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglebiglakehivedatabaseiampolicy"

&datagooglebiglakehivedatabaseiampolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#catalog DataGoogleBiglakeHiveDatabaseIamPolicy#catalog}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#name DataGoogleBiglakeHiveDatabaseIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#id DataGoogleBiglakeHiveDatabaseIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#project DataGoogleBiglakeHiveDatabaseIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#catalog DataGoogleBiglakeHiveDatabaseIamPolicy#catalog}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#name DataGoogleBiglakeHiveDatabaseIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#id DataGoogleBiglakeHiveDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBiglakeHiveDatabaseIamPolicy.DataGoogleBiglakeHiveDatabaseIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/biglake_hive_database_iam_policy#project DataGoogleBiglakeHiveDatabaseIamPolicy#project}.

---



