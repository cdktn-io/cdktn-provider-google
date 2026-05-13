# `dataGoogleSqlBackupRun` Submodule <a name="`dataGoogleSqlBackupRun` Submodule" id="@cdktn/provider-google.dataGoogleSqlBackupRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSqlBackupRun <a name="DataGoogleSqlBackupRun" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run google_sql_backup_run}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglesqlbackuprun"

datagooglesqlbackuprun.NewDataGoogleSqlBackupRun(scope Construct, id *string, config DataGoogleSqlBackupRunConfig) DataGoogleSqlBackupRun
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig">DataGoogleSqlBackupRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig">DataGoogleSqlBackupRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetId"></a>

```go
func ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetMostRecent"></a>

```go
func ResetMostRecent()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleSqlBackupRun resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglesqlbackuprun"

datagooglesqlbackuprun.DataGoogleSqlBackupRun_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglesqlbackuprun"

datagooglesqlbackuprun.DataGoogleSqlBackupRun_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglesqlbackuprun"

datagooglesqlbackuprun.DataGoogleSqlBackupRun_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglesqlbackuprun"

datagooglesqlbackuprun.DataGoogleSqlBackupRun_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleSqlBackupRun resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleSqlBackupRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleSqlBackupRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSqlBackupRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.backupIdInput">BackupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.mostRecentInput">MostRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.backupId">BackupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.backupIdInput"></a>

```go
func BackupIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.mostRecentInput"></a>

```go
func MostRecentInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.backupId"></a>

```go
func BackupId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.mostRecent"></a>

```go
func MostRecent() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRun.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSqlBackupRunConfig <a name="DataGoogleSqlBackupRunConfig" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglesqlbackuprun"

&datagooglesqlbackuprun.DataGoogleSqlBackupRunConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	BackupId: *f64,
	Id: *string,
	MostRecent: interface{},
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.instance">Instance</a></code> | <code>*string</code> | Name of the database instance. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.backupId">BackupId</a></code> | <code>*f64</code> | The identifier for this backup run. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#id DataGoogleSqlBackupRun#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | Toggles use of the most recent backup run if multiple backups exist for a Cloud SQL instance. |
| <code><a href="#@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.project">Project</a></code> | <code>*string</code> | Project ID of the project that contains the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Name of the database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#instance DataGoogleSqlBackupRun#instance}

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.backupId"></a>

```go
BackupId *f64
```

- *Type:* *f64

The identifier for this backup run.

Unique only for a specific Cloud SQL instance. If left empty and multiple backups exist for the instance, most_recent must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#backup_id DataGoogleSqlBackupRun#backup_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#id DataGoogleSqlBackupRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.mostRecent"></a>

```go
MostRecent interface{}
```

- *Type:* interface{}

Toggles use of the most recent backup run if multiple backups exist for a Cloud SQL instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#most_recent DataGoogleSqlBackupRun#most_recent}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSqlBackupRun.DataGoogleSqlBackupRunConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project ID of the project that contains the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/sql_backup_run#project DataGoogleSqlBackupRun#project}

---



