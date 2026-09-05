# `dataGoogleVertexAiReasoningEngineQuery` Submodule <a name="`dataGoogleVertexAiReasoningEngineQuery` Submodule" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiReasoningEngineQuery <a name="DataGoogleVertexAiReasoningEngineQuery" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglevertexaireasoningenginequery"

datagooglevertexaireasoningenginequery.NewDataGoogleVertexAiReasoningEngineQuery(scope Construct, id *string, config DataGoogleVertexAiReasoningEngineQueryConfig) DataGoogleVertexAiReasoningEngineQuery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig">DataGoogleVertexAiReasoningEngineQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig">DataGoogleVertexAiReasoningEngineQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod">ResetClassMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClassMethod` <a name="ResetClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod"></a>

```go
func ResetClassMethod()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput"></a>

```go
func ResetInput()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglevertexaireasoningenginequery"

datagooglevertexaireasoningenginequery.DataGoogleVertexAiReasoningEngineQuery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglevertexaireasoningenginequery"

datagooglevertexaireasoningenginequery.DataGoogleVertexAiReasoningEngineQuery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglevertexaireasoningenginequery"

datagooglevertexaireasoningenginequery.DataGoogleVertexAiReasoningEngineQuery_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglevertexaireasoningenginequery"

datagooglevertexaireasoningenginequery.DataGoogleVertexAiReasoningEngineQuery_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleVertexAiReasoningEngineQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleVertexAiReasoningEngineQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiReasoningEngineQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output">Output</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput">ClassMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput">ReasoningEngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod">ClassMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId">ReasoningEngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output"></a>

```go
func Output() *string
```

- *Type:* *string

---

##### `ClassMethodInput`<sup>Optional</sup> <a name="ClassMethodInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput"></a>

```go
func ClassMethodInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReasoningEngineIdInput`<sup>Optional</sup> <a name="ReasoningEngineIdInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput"></a>

```go
func ReasoningEngineIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ClassMethod`<sup>Required</sup> <a name="ClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod"></a>

```go
func ClassMethod() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReasoningEngineId`<sup>Required</sup> <a name="ReasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId"></a>

```go
func ReasoningEngineId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiReasoningEngineQueryConfig <a name="DataGoogleVertexAiReasoningEngineQueryConfig" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglevertexaireasoningenginequery"

&datagooglevertexaireasoningenginequery.DataGoogleVertexAiReasoningEngineQueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ReasoningEngineId: *string,
	Region: *string,
	ClassMethod: *string,
	Id: *string,
	Input: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId">ReasoningEngineId</a></code> | <code>*string</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region">Region</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod">ClassMethod</a></code> | <code>*string</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input">Input</a></code> | <code>*string</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project">Project</a></code> | <code>*string</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReasoningEngineId`<sup>Required</sup> <a name="ReasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId"></a>

```go
ReasoningEngineId *string
```

- *Type:* *string

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `ClassMethod`<sup>Optional</sup> <a name="ClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod"></a>

```go
ClassMethod *string
```

- *Type:* *string

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input"></a>

```go
Input *string
```

- *Type:* *string

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---



