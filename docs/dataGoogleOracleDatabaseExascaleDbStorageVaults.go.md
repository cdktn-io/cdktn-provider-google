# `dataGoogleOracleDatabaseExascaleDbStorageVaults` Submodule <a name="`dataGoogleOracleDatabaseExascaleDbStorageVaults` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaults <a name="DataGoogleOracleDatabaseExascaleDbStorageVaults" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_exascale_db_storage_vaults google_oracle_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaults(scope Construct, id *string, config DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig) DataGoogleOracleDatabaseExascaleDbStorageVaults
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig">DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig">DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVaults resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaults_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaults_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaults_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaults_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVaults resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOracleDatabaseExascaleDbStorageVaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOracleDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">ExascaleDbStorageVaults</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExascaleDbStorageVaults`<sup>Required</sup> <a name="ExascaleDbStorageVaults" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```go
func ExascaleDbStorageVaults() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

&datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.location">Location</a></code> | <code>*string</code> | location. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the dataset is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#location DataGoogleOracleDatabaseExascaleDbStorageVaults#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/oracle_database_exascale_db_storage_vaults#project DataGoogleOracleDatabaseExascaleDbStorageVaults#project}

---

### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

&datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults {

}
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

&datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties {

}
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

&datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails {

}
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

&datagoogleoracledatabaseexascaledbstoragevaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exadataInfrastructure"></a>

```go
func ExadataInfrastructure() *string
```

- *Type:* *string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exascaleDbStorageVaultId"></a>

```go
func ExascaleDbStorageVaultId() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.properties"></a>

```go
func Properties() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">AvailableSizeGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSizeGbs`<sup>Required</sup> <a name="AvailableSizeGbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```go
func AvailableSizeGbs() *f64
```

- *Type:* *f64

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```go
func TotalSizeGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.attachedShapeAttributes">AttachedShapeAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.availableShapeAttributes">AvailableShapeAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalFlashCachePercent`<sup>Required</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```go
func AdditionalFlashCachePercent() *f64
```

- *Type:* *f64

---

##### `AttachedShapeAttributes`<sup>Required</sup> <a name="AttachedShapeAttributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.attachedShapeAttributes"></a>

```go
func AttachedShapeAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableShapeAttributes`<sup>Required</sup> <a name="AvailableShapeAttributes" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.availableShapeAttributes"></a>

```go
func AvailableShapeAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```go
func ExascaleDbStorageDetails() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ociUri"></a>

```go
func OciUri() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterCount"></a>

```go
func VmClusterCount() *f64
```

- *Type:* *f64

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterIds"></a>

```go
func VmClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabaseexascaledbstoragevaults"

datagoogleoracledatabaseexascaledbstoragevaults.NewDataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone</a>

---



