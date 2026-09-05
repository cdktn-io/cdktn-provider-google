# `dataGoogleBackupDrDataSources` Submodule <a name="`dataGoogleBackupDrDataSources` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSources <a name="DataGoogleBackupDrDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources google_backup_dr_data_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSources(scope Construct, id *string, config DataGoogleBackupDrDataSourcesConfig) DataGoogleBackupDrDataSources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId"></a>

```go
func ResetId()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.DataGoogleBackupDrDataSources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources"></a>

```go
func DataSources() DataGoogleBackupDrDataSourcesDataSourcesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a>

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourcesConfig <a name="DataGoogleBackupDrDataSourcesConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupVaultId: *string,
	Location: *string,
	Filter: *string,
	Id: *string,
	OrderBy: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply to list results. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | The order to sort results by. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply to list results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#filter DataGoogleBackupDrDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

The order to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#order_by DataGoogleBackupDrDataSources#order_by}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}.

---

### DataGoogleBackupDrDataSourcesDataSources <a name="DataGoogleBackupDrDataSourcesDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSources {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource {

}
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

&datagooglebackupdrdatasources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">BackupApplianceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">BackupApplianceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">SlaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">SlpName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">SltName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackupApplianceId`<sup>Required</sup> <a name="BackupApplianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```go
func BackupApplianceId() *string
```

- *Type:* *string

---

##### `BackupApplianceName`<sup>Required</sup> <a name="BackupApplianceName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```go
func BackupApplianceName() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `SlaId`<sup>Required</sup> <a name="SlaId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```go
func SlaId() *string
```

- *Type:* *string

---

##### `SlpName`<sup>Required</sup> <a name="SlpName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```go
func SlpName() *string
```

- *Type:* *string

---

##### `SltName`<sup>Required</sup> <a name="SltName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```go
func SltName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">BackupPlanAssociation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">BackupPlanDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">BackupPlanRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `BackupPlanAssociation`<sup>Required</sup> <a name="BackupPlanAssociation" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```go
func BackupPlanAssociation() *string
```

- *Type:* *string

---

##### `BackupPlanDescription`<sup>Required</sup> <a name="BackupPlanDescription" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```go
func BackupPlanDescription() *string
```

- *Type:* *string

---

##### `BackupPlanRules`<sup>Required</sup> <a name="BackupPlanRules" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```go
func BackupPlanRules() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">BackupApplianceBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig">GcpBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupApplianceBackupConfig`<sup>Required</sup> <a name="BackupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```go
func BackupApplianceBackupConfig() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `GcpBackupConfig`<sup>Required</sup> <a name="GcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```go
func GcpBackupConfig() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a>

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError"></a>

```go
func LastBackupError() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```go
func LastSuccessfulBackupConsistencyTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId">ApplianceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">BackupAppliance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplianceId`<sup>Required</sup> <a name="ApplianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```go
func ApplianceId() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackupAppliance`<sup>Required</sup> <a name="BackupAppliance" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```go
func BackupAppliance() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">TotalDiskCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">TotalDiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TotalDiskCount`<sup>Required</sup> <a name="TotalDiskCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```go
func TotalDiskCount() *string
```

- *Type:* *string

---

##### `TotalDiskSizeGb`<sup>Required</sup> <a name="TotalDiskSizeGb" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```go
func TotalDiskSizeGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">ComputeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename">GcpResourcename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstanceDataSourceProperties`<sup>Required</sup> <a name="ComputeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```go
func ComputeInstanceDataSourceProperties() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `GcpResourcename`<sup>Required</sup> <a name="GcpResourcename" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```go
func GcpResourcename() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesList <a name="DataGoogleBackupDrDataSourcesDataSourcesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrDataSourcesDataSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrDataSourcesDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrDataSourcesDataSourcesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglebackupdrdatasources"

datagooglebackupdrdatasources.NewDataGoogleBackupDrDataSourcesDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrDataSourcesDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupBlockedByVaultAccessRestriction">BackupBlockedByVaultAccessRestriction</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo">BackupConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount">BackupCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState">ConfigState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication">DataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource">DataSourceGcpResource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupBlockedByVaultAccessRestriction`<sup>Required</sup> <a name="BackupBlockedByVaultAccessRestriction" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupBlockedByVaultAccessRestriction"></a>

```go
func BackupBlockedByVaultAccessRestriction() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BackupConfigInfo`<sup>Required</sup> <a name="BackupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo"></a>

```go
func BackupConfigInfo() DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a>

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount"></a>

```go
func BackupCount() *string
```

- *Type:* *string

---

##### `ConfigState`<sup>Required</sup> <a name="ConfigState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState"></a>

```go
func ConfigState() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSourceBackupApplianceApplication`<sup>Required</sup> <a name="DataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication"></a>

```go
func DataSourceBackupApplianceApplication() DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a>

---

##### `DataSourceGcpResource`<sup>Required</sup> <a name="DataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource"></a>

```go
func DataSourceGcpResource() DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes"></a>

```go
func TotalStoredBytes() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrDataSourcesDataSources
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a>

---



