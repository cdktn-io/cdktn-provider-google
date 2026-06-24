# `dataGoogleVertexAiReasoningEngineQuery` Submodule <a name="`dataGoogleVertexAiReasoningEngineQuery` Submodule" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiReasoningEngineQuery <a name="DataGoogleVertexAiReasoningEngineQuery" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVertexAiReasoningEngineQuery(Construct Scope, string Id, DataGoogleVertexAiReasoningEngineQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig">DataGoogleVertexAiReasoningEngineQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClassMethod` <a name="ResetClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod"></a>

```csharp
private void ResetClassMethod()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject"></a>

```csharp
private void ResetProject()
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

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVertexAiReasoningEngineQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVertexAiReasoningEngineQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVertexAiReasoningEngineQuery.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVertexAiReasoningEngineQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVertexAiReasoningEngineQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVertexAiReasoningEngineQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiReasoningEngineQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output">Output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput">ClassMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput">ReasoningEngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod">ClassMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId">ReasoningEngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output"></a>

```csharp
public string Output { get; }
```

- *Type:* string

---

##### `ClassMethodInput`<sup>Optional</sup> <a name="ClassMethodInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput"></a>

```csharp
public string ClassMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReasoningEngineIdInput`<sup>Optional</sup> <a name="ReasoningEngineIdInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput"></a>

```csharp
public string ReasoningEngineIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ClassMethod`<sup>Required</sup> <a name="ClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod"></a>

```csharp
public string ClassMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReasoningEngineId`<sup>Required</sup> <a name="ReasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId"></a>

```csharp
public string ReasoningEngineId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiReasoningEngineQueryConfig <a name="DataGoogleVertexAiReasoningEngineQueryConfig" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVertexAiReasoningEngineQueryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ReasoningEngineId,
    string Region,
    string ClassMethod = null,
    string Id = null,
    string Input = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId">ReasoningEngineId</a></code> | <code>string</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region">Region</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod">ClassMethod</a></code> | <code>string</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input">Input</a></code> | <code>string</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project">Project</a></code> | <code>string</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReasoningEngineId`<sup>Required</sup> <a name="ReasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId"></a>

```csharp
public string ReasoningEngineId { get; set; }
```

- *Type:* string

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `ClassMethod`<sup>Optional</sup> <a name="ClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod"></a>

```csharp
public string ClassMethod { get; set; }
```

- *Type:* string

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---



