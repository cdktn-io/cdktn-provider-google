# `dataGoogleBackupDrDataSourceReference` Submodule <a name="`dataGoogleBackupDrDataSourceReference` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSourceReference <a name="DataGoogleBackupDrDataSourceReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference google_backup_dr_data_source_reference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasourcereference"

datagooglebackupdrdatasourcereference.NewDataGoogleBackupDrDataSourceReference(scope Construct, id *string, config DataGoogleBackupDrDataSourceReferenceConfig) DataGoogleBackupDrDataSourceReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig">DataGoogleBackupDrDataSourceReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig">DataGoogleBackupDrDataSourceReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSourceReference resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasourcereference"

datagooglebackupdrdatasourcereference.DataGoogleBackupDrDataSourceReference_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasourcereference"

datagooglebackupdrdatasourcereference.DataGoogleBackupDrDataSourceReference_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasourcereference"

datagooglebackupdrdatasourcereference.DataGoogleBackupDrDataSourceReference_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasourcereference"

datagooglebackupdrdatasourcereference.DataGoogleBackupDrDataSourceReference_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSourceReference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrDataSourceReference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrDataSourceReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSourceReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.backupConfigState">BackupConfigState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.backupCount">BackupCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.gcpResourceName">GcpResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.lastSuccessfulBackupTime">LastSuccessfulBackupTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dataSourceReferenceIdInput">DataSourceReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dataSourceReferenceId">DataSourceReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BackupConfigState`<sup>Required</sup> <a name="BackupConfigState" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.backupConfigState"></a>

```go
func BackupConfigState() *string
```

- *Type:* *string

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.backupCount"></a>

```go
func BackupCount() *f64
```

- *Type:* *f64

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `GcpResourceName`<sup>Required</sup> <a name="GcpResourceName" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.gcpResourceName"></a>

```go
func GcpResourceName() *string
```

- *Type:* *string

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupTime`<sup>Required</sup> <a name="LastSuccessfulBackupTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.lastSuccessfulBackupTime"></a>

```go
func LastSuccessfulBackupTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `DataSourceReferenceIdInput`<sup>Optional</sup> <a name="DataSourceReferenceIdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dataSourceReferenceIdInput"></a>

```go
func DataSourceReferenceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `DataSourceReferenceId`<sup>Required</sup> <a name="DataSourceReferenceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.dataSourceReferenceId"></a>

```go
func DataSourceReferenceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReference.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourceReferenceConfig <a name="DataGoogleBackupDrDataSourceReferenceConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasourcereference"

&datagooglebackupdrdatasourcereference.DataGoogleBackupDrDataSourceReferenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceReferenceId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.dataSourceReferenceId">DataSourceReferenceId</a></code> | <code>*string</code> | The `id` of the data source reference. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the data source reference. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference#id DataGoogleBackupDrDataSourceReference#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceReferenceId`<sup>Required</sup> <a name="DataSourceReferenceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.dataSourceReferenceId"></a>

```go
DataSourceReferenceId *string
```

- *Type:* *string

The `id` of the data source reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference#data_source_reference_id DataGoogleBackupDrDataSourceReference#data_source_reference_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the data source reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference#location DataGoogleBackupDrDataSourceReference#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference#id DataGoogleBackupDrDataSourceReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReference.DataGoogleBackupDrDataSourceReferenceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_source_reference#project DataGoogleBackupDrDataSourceReference#project}

---



