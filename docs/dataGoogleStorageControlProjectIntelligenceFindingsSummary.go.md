# `dataGoogleStorageControlProjectIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummary <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary google_storage_control_project_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.NewDataGoogleStorageControlProjectIntelligenceFindingsSummary(scope Construct, id *string, config DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig) DataGoogleStorageControlProjectIntelligenceFindingsSummary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig">DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig">DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetResourceScope">ResetResourceScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResourceScope` <a name="ResetResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetResourceScope"></a>

```go
func ResetResourceScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingsSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.findingSummaries">FindingSummaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScopeInput">ResourceScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScope">ResourceScope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FindingSummaries`<sup>Required</sup> <a name="FindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.findingSummaries"></a>

```go
func FindingSummaries() DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceScopeInput`<sup>Optional</sup> <a name="ResourceScopeInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```go
func ResourceScopeInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResourceScope`<sup>Required</sup> <a name="ResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScope"></a>

```go
func ResourceScope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

&datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Id: *string,
	Location: *string,
	Project: *string,
	ResourceScope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.location">Location</a></code> | <code>*string</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.resourceScope">ResourceScope</a></code> | <code>*string</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#filter DataGoogleStorageControlProjectIntelligenceFindingsSummary#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#location DataGoogleStorageControlProjectIntelligenceFindingsSummary#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#project DataGoogleStorageControlProjectIntelligenceFindingsSummary#project}

---

##### `ResourceScope`<sup>Optional</sup> <a name="ResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```go
ResourceScope *string
```

- *Type:* *string

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_control_project_intelligence_findings_summary#resource_scope DataGoogleStorageControlProjectIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

&datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries {

}
```


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

&datagooglestoragecontrolprojectintelligencefindingssummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.NewDataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.NewDataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">SummaryDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">TargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `SummaryDetails`<sup>Required</sup> <a name="SummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```go
func SummaryDetails() DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```go
func TargetResource() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.NewDataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglestoragecontrolprojectintelligencefindingssummary"

datagooglestoragecontrolprojectintelligencefindingssummary.NewDataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---



