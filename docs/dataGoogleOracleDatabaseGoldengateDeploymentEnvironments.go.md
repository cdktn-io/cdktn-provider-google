# `dataGoogleOracleDatabaseGoldengateDeploymentEnvironments` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentEnvironments` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironments <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_environments google_oracle_database_goldengate_deployment_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.NewDataGoogleOracleDatabaseGoldengateDeploymentEnvironments(scope Construct, id *string, config DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig) DataGoogleOracleDatabaseGoldengateDeploymentEnvironments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentEnvironments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.goldengateDeploymentEnvironments">GoldengateDeploymentEnvironments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GoldengateDeploymentEnvironments`<sup>Required</sup> <a name="GoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.goldengateDeploymentEnvironments"></a>

```go
func GoldengateDeploymentEnvironments() DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

&datagoogleoracledatabasegoldengatedeploymentenvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_environments#location DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_environments#project DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

&datagoogleoracledatabasegoldengatedeploymentenvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.NewDataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get"></a>

```go
func Get(index *f64) DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagoogleoracledatabasegoldengatedeploymentenvironments"

datagoogleoracledatabasegoldengatedeploymentenvironments.NewDataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.defaultCpuCoreCount">DefaultCpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.environmentType">EnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.maxCpuCoreCount">MaxCpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.memoryGbPerCpuCore">MemoryGbPerCpuCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.minCpuCoreCount">MinCpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.networkBandwidthGbpsPerCpuCore">NetworkBandwidthGbpsPerCpuCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.storageUsageLimitGbPerCpuCore">StorageUsageLimitGbPerCpuCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.autoScalingEnabled"></a>

```go
func AutoScalingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `DefaultCpuCoreCount`<sup>Required</sup> <a name="DefaultCpuCoreCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.defaultCpuCoreCount"></a>

```go
func DefaultCpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.environmentType"></a>

```go
func EnvironmentType() *string
```

- *Type:* *string

---

##### `MaxCpuCoreCount`<sup>Required</sup> <a name="MaxCpuCoreCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.maxCpuCoreCount"></a>

```go
func MaxCpuCoreCount() *f64
```

- *Type:* *f64

---

##### `MemoryGbPerCpuCore`<sup>Required</sup> <a name="MemoryGbPerCpuCore" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.memoryGbPerCpuCore"></a>

```go
func MemoryGbPerCpuCore() *f64
```

- *Type:* *f64

---

##### `MinCpuCoreCount`<sup>Required</sup> <a name="MinCpuCoreCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.minCpuCoreCount"></a>

```go
func MinCpuCoreCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkBandwidthGbpsPerCpuCore`<sup>Required</sup> <a name="NetworkBandwidthGbpsPerCpuCore" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.networkBandwidthGbpsPerCpuCore"></a>

```go
func NetworkBandwidthGbpsPerCpuCore() *f64
```

- *Type:* *f64

---

##### `StorageUsageLimitGbPerCpuCore`<sup>Required</sup> <a name="StorageUsageLimitGbPerCpuCore" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.storageUsageLimitGbPerCpuCore"></a>

```go
func StorageUsageLimitGbPerCpuCore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments</a>

---



