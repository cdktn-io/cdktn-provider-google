# `dataGoogleStorageControlProjectIntelligenceFindingRevision` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingRevision` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevision <a name="DataGoogleStorageControlProjectIntelligenceFindingRevision" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision google_storage_control_project_intelligence_finding_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevision(scope Construct, id *string, config DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig) DataGoogleStorageControlProjectIntelligenceFindingRevision
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig">DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig">DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevision_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevision_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevision_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevision_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingIdInput">FindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionIdInput">RevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingId">FindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionId">RevisionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.snapshot"></a>

```go
func Snapshot() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList</a>

---

##### `FindingIdInput`<sup>Optional</sup> <a name="FindingIdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingIdInput"></a>

```go
func FindingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RevisionIdInput`<sup>Optional</sup> <a name="RevisionIdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionIdInput"></a>

```go
func RevisionIdInput() *string
```

- *Type:* *string

---

##### `FindingId`<sup>Required</sup> <a name="FindingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingId"></a>

```go
func FindingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionId"></a>

```go
func RevisionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FindingId: *string,
	RevisionId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.findingId">FindingId</a></code> | <code>*string</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.revisionId">RevisionId</a></code> | <code>*string</code> | The ID of the finding revision. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FindingId`<sup>Required</sup> <a name="FindingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.findingId"></a>

```go
FindingId *string
```

- *Type:* *string

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevision#finding_id}

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.revisionId"></a>

```go
RevisionId *string
```

- *Type:* *string

The ID of the finding revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#revision_id DataGoogleStorageControlProjectIntelligenceFindingRevision#revision_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#location DataGoogleStorageControlProjectIntelligenceFindingRevision#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#project DataGoogleStorageControlProjectIntelligenceFindingRevision#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

&datagooglestoragecontrolprojectintelligencefindingrevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList</a>

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.associatedResources">AssociatedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike">ColdlineAndArchivalStorageOperationsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.crossRegionEgressSpike">CrossRegionEgressSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.observationPeriod">ObservationPeriod</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.storageGrowthAboveTrend">StorageGrowthAboveTrend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.targetResource">TargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.throttledRequestsSpike">ThrottledRequestsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociatedResources`<sup>Required</sup> <a name="AssociatedResources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.associatedResources"></a>

```go
func AssociatedResources() *[]*string
```

- *Type:* *[]*string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ColdlineAndArchivalStorageOperationsSpike`<sup>Required</sup> <a name="ColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```go
func ColdlineAndArchivalStorageOperationsSpike() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CrossRegionEgressSpike`<sup>Required</sup> <a name="CrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.crossRegionEgressSpike"></a>

```go
func CrossRegionEgressSpike() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObservationPeriod`<sup>Required</sup> <a name="ObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.observationPeriod"></a>

```go
func ObservationPeriod() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `StorageGrowthAboveTrend`<sup>Required</sup> <a name="StorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.storageGrowthAboveTrend"></a>

```go
func StorageGrowthAboveTrend() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.targetResource"></a>

```go
func TargetResource() *string
```

- *Type:* *string

---

##### `ThrottledRequestsSpike`<sup>Required</sup> <a name="ThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.throttledRequestsSpike"></a>

```go
func ThrottledRequestsSpike() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList</a>

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevision"

datagooglestoragecontrolprojectintelligencefindingrevision.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets</a>

---



