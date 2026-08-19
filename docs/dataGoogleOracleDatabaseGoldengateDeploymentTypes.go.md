# `dataGoogleOracleDatabaseGoldengateDeploymentTypes` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentTypes` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypes <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_goldengate_deployment_types google_oracle_database_goldengate_deployment_types}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.NewDataGoogleOracleDatabaseGoldengateDeploymentTypes(scope Construct, id *string, config DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig) DataGoogleOracleDatabaseGoldengateDeploymentTypes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig">DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig">DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_goldengate_deployment_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.goldengateDeploymentTypes">GoldengateDeploymentTypes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GoldengateDeploymentTypes`<sup>Required</sup> <a name="GoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.goldengateDeploymentTypes"></a>

```go
func GoldengateDeploymentTypes() DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

&datagoogleoracledatabasegoldengatedeploymenttypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_goldengate_deployment_types#location DataGoogleOracleDatabaseGoldengateDeploymentTypes#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/oracle_database_goldengate_deployment_types#project DataGoogleOracleDatabaseGoldengateDeploymentTypes#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

&datagoogleoracledatabasegoldengatedeploymenttypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.NewDataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagoogleoracledatabasegoldengatedeploymenttypes"

datagoogleoracledatabasegoldengatedeploymenttypes.NewDataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.connectionTypes">ConnectionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.defaultUsername">DefaultUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.oggVersion">OggVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.sourceTechnologies">SourceTechnologies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedCapabilities">SupportedCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedTechnologiesUrl">SupportedTechnologiesUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.targetTechnologies">TargetTechnologies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ConnectionTypes`<sup>Required</sup> <a name="ConnectionTypes" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.connectionTypes"></a>

```go
func ConnectionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultUsername`<sup>Required</sup> <a name="DefaultUsername" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.defaultUsername"></a>

```go
func DefaultUsername() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.oggVersion"></a>

```go
func OggVersion() *string
```

- *Type:* *string

---

##### `SourceTechnologies`<sup>Required</sup> <a name="SourceTechnologies" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.sourceTechnologies"></a>

```go
func SourceTechnologies() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedCapabilities`<sup>Required</sup> <a name="SupportedCapabilities" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedCapabilities"></a>

```go
func SupportedCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedTechnologiesUrl`<sup>Required</sup> <a name="SupportedTechnologiesUrl" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.supportedTechnologiesUrl"></a>

```go
func SupportedTechnologiesUrl() *string
```

- *Type:* *string

---

##### `TargetTechnologies`<sup>Required</sup> <a name="TargetTechnologies" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.targetTechnologies"></a>

```go
func TargetTechnologies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentTypes.DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes">DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes</a>

---



