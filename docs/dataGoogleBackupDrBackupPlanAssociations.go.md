# `dataGoogleBackupDrBackupPlanAssociations` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociations` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociations <a name="DataGoogleBackupDrBackupPlanAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations google_backup_dr_backup_plan_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociations(scope Construct, id *string, config DataGoogleBackupDrBackupPlanAssociationsConfig) DataGoogleBackupDrBackupPlanAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig">DataGoogleBackupDrBackupPlanAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig">DataGoogleBackupDrBackupPlanAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType"></a>

```go
func ResetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrBackupPlanAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations">Associations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations"></a>

```go
func Associations() DataGoogleBackupDrBackupPlanAssociationsAssociationsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociations <a name="DataGoogleBackupDrBackupPlanAssociationsAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

&datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociationsAssociations {

}
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

&datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo {

}
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

&datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError {

}
```


### DataGoogleBackupDrBackupPlanAssociationsConfig <a name="DataGoogleBackupDrBackupPlanAssociationsConfig" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

&datagooglebackupdrbackupplanassociations.DataGoogleBackupDrBackupPlanAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Project: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location">Location</a></code> | <code>*string</code> | The location to list the backup plan associations from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location to list the backup plan associations from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations#location DataGoogleBackupDrBackupPlanAssociations#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations#project DataGoogleBackupDrBackupPlanAssociations#project}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/backup_dr_backup_plan_associations#resource_type DataGoogleBackupDrBackupPlanAssociations#resource_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociationsList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociationsAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanAssociationsAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo">RulesConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `RulesConfigInfo`<sup>Required</sup> <a name="RulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo"></a>

```go
func RulesConfigInfo() DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanAssociationsAssociations
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrbackupplanassociations"

datagooglebackupdrbackupplanassociations.NewDataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError"></a>

```go
func LastBackupError() DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a>

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```go
func LastSuccessfulBackupConsistencyTime() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a>

---



