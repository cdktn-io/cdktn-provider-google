# `dataGoogleGkeBackupBackupPlanIamPolicy` Submodule <a name="`dataGoogleGkeBackupBackupPlanIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGkeBackupBackupPlanIamPolicy <a name="DataGoogleGkeBackupBackupPlanIamPolicy" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy google_gke_backup_backup_plan_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglegkebackupbackupplaniampolicy"

datagooglegkebackupbackupplaniampolicy.NewDataGoogleGkeBackupBackupPlanIamPolicy(scope Construct, id *string, config DataGoogleGkeBackupBackupPlanIamPolicyConfig) DataGoogleGkeBackupBackupPlanIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig">DataGoogleGkeBackupBackupPlanIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig">DataGoogleGkeBackupBackupPlanIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleGkeBackupBackupPlanIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglegkebackupbackupplaniampolicy"

datagooglegkebackupbackupplaniampolicy.DataGoogleGkeBackupBackupPlanIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglegkebackupbackupplaniampolicy"

datagooglegkebackupbackupplaniampolicy.DataGoogleGkeBackupBackupPlanIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglegkebackupbackupplaniampolicy"

datagooglegkebackupbackupplaniampolicy.DataGoogleGkeBackupBackupPlanIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglegkebackupbackupplaniampolicy"

datagooglegkebackupbackupplaniampolicy.DataGoogleGkeBackupBackupPlanIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleGkeBackupBackupPlanIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleGkeBackupBackupPlanIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleGkeBackupBackupPlanIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleGkeBackupBackupPlanIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGkeBackupBackupPlanIamPolicyConfig <a name="DataGoogleGkeBackupBackupPlanIamPolicyConfig" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglegkebackupbackupplaniampolicy"

&datagooglegkebackupbackupplaniampolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#name DataGoogleGkeBackupBackupPlanIamPolicy#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#id DataGoogleGkeBackupBackupPlanIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#location DataGoogleGkeBackupBackupPlanIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#project DataGoogleGkeBackupBackupPlanIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#name DataGoogleGkeBackupBackupPlanIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#id DataGoogleGkeBackupBackupPlanIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#location DataGoogleGkeBackupBackupPlanIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/gke_backup_backup_plan_iam_policy#project DataGoogleGkeBackupBackupPlanIamPolicy#project}.

---



