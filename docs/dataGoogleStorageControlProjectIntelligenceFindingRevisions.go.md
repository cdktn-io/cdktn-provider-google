# `dataGoogleStorageControlProjectIntelligenceFindingRevisions` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingRevisions` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisions <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisions" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions google_storage_control_project_intelligence_finding_revisions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisions(scope Construct, id *string, config DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig) DataGoogleStorageControlProjectIntelligenceFindingRevisions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig">DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig">DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevisions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevisions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevisions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevisions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevisions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.revisions">Revisions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingIdInput">FindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingId">FindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Revisions`<sup>Required</sup> <a name="Revisions" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.revisions"></a>

```go
func Revisions() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList</a>

---

##### `FindingIdInput`<sup>Optional</sup> <a name="FindingIdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingIdInput"></a>

```go
func FindingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `FindingId`<sup>Required</sup> <a name="FindingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.findingId"></a>

```go
func FindingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FindingId: *string,
	Id: *string,
	Location: *string,
	PageSize: *f64,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.findingId">FindingId</a></code> | <code>*string</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.location">Location</a></code> | <code>*string</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | The maximum number of IntelligenceFindingRevision resources to return. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FindingId`<sup>Required</sup> <a name="FindingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.findingId"></a>

```go
FindingId *string
```

- *Type:* *string

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevisions#finding_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#id DataGoogleStorageControlProjectIntelligenceFindingRevisions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#location DataGoogleStorageControlProjectIntelligenceFindingRevisions#location}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

The maximum number of IntelligenceFindingRevision resources to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#page_size DataGoogleStorageControlProjectIntelligenceFindingRevisions#page_size}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/storage_control_project_intelligence_finding_revisions#project DataGoogleStorageControlProjectIntelligenceFindingRevisions#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

&datagooglestoragecontrolprojectintelligencefindingrevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.snapshot"></a>

```go
func Snapshot() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisions</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList</a>

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.associatedResources">AssociatedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike">ColdlineAndArchivalStorageOperationsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.crossRegionEgressSpike">CrossRegionEgressSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.observationPeriod">ObservationPeriod</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.storageGrowthAboveTrend">StorageGrowthAboveTrend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.targetResource">TargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.throttledRequestsSpike">ThrottledRequestsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociatedResources`<sup>Required</sup> <a name="AssociatedResources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.associatedResources"></a>

```go
func AssociatedResources() *[]*string
```

- *Type:* *[]*string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ColdlineAndArchivalStorageOperationsSpike`<sup>Required</sup> <a name="ColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```go
func ColdlineAndArchivalStorageOperationsSpike() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CrossRegionEgressSpike`<sup>Required</sup> <a name="CrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.crossRegionEgressSpike"></a>

```go
func CrossRegionEgressSpike() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotCrossRegionEgressSpikeList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObservationPeriod`<sup>Required</sup> <a name="ObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.observationPeriod"></a>

```go
func ObservationPeriod() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotObservationPeriodList</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `StorageGrowthAboveTrend`<sup>Required</sup> <a name="StorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.storageGrowthAboveTrend"></a>

```go
func StorageGrowthAboveTrend() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.targetResource"></a>

```go
func TargetResource() *string
```

- *Type:* *string

---

##### `ThrottledRequestsSpike`<sup>Required</sup> <a name="ThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.throttledRequestsSpike"></a>

```go
func ThrottledRequestsSpike() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshot</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList</a>

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```go
func TopBuckets() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```go
func TopPrefixes() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingrevisions"

datagooglestoragecontrolprojectintelligencefindingrevisions.NewDataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```go
func Contribution() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```go
func Error() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```go
func PercentageIncrease() *f64
```

- *Type:* *f64

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```go
func ThrottledRequests() *string
```

- *Type:* *string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```go
func TotalEgressBytes() *string
```

- *Type:* *string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```go
func TotalOperationsCount() *string
```

- *Type:* *string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```go
func TotalStorageGrowthBytes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevisions.DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionsRevisionsSnapshotThrottledRequestsSpikeTopBuckets</a>

---



