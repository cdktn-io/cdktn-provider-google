# `cesTool` Submodule <a name="`cesTool` Submodule" id="@cdktn/provider-google.cesTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesTool <a name="CesTool" id="@cdktn/provider-google.cesTool.CesTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool google_ces_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesTool(Construct Scope, string Id, CesToolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig">CesToolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.cesTool.CesTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolConfig">CesToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putClientFunction">PutClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putDataStoreTool">PutDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool">PutGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putPythonFunction">PutPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetClientFunction">ResetClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetDataStoreTool">ResetDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetExecutionType">ResetExecutionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetGoogleSearchTool">ResetGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetPythonFunction">ResetPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesTool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesTool.CesTool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.cesTool.CesTool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesTool.CesTool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.cesTool.CesTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesTool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesTool.CesTool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.cesTool.CesTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesTool.CesTool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesTool.CesTool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesTool.CesTool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesTool.CesTool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesTool.CesTool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cesTool.CesTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesTool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesTool.CesTool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesTool.CesTool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesTool.CesTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesTool.CesTool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesTool.CesTool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesTool.CesTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesTool.CesTool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cesTool.CesTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesTool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesTool.CesTool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesTool.CesTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientFunction` <a name="PutClientFunction" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction"></a>

```csharp
private void PutClientFunction(CesToolClientFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesTool.putClientFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---

##### `PutDataStoreTool` <a name="PutDataStoreTool" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool"></a>

```csharp
private void PutDataStoreTool(CesToolDataStoreTool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesTool.putDataStoreTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---

##### `PutGoogleSearchTool` <a name="PutGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool"></a>

```csharp
private void PutGoogleSearchTool(CesToolGoogleSearchTool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesTool.putGoogleSearchTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---

##### `PutPythonFunction` <a name="PutPythonFunction" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction"></a>

```csharp
private void PutPythonFunction(CesToolPythonFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesTool.putPythonFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts"></a>

```csharp
private void PutTimeouts(CesToolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---

##### `ResetClientFunction` <a name="ResetClientFunction" id="@cdktn/provider-google.cesTool.CesTool.resetClientFunction"></a>

```csharp
private void ResetClientFunction()
```

##### `ResetDataStoreTool` <a name="ResetDataStoreTool" id="@cdktn/provider-google.cesTool.CesTool.resetDataStoreTool"></a>

```csharp
private void ResetDataStoreTool()
```

##### `ResetExecutionType` <a name="ResetExecutionType" id="@cdktn/provider-google.cesTool.CesTool.resetExecutionType"></a>

```csharp
private void ResetExecutionType()
```

##### `ResetGoogleSearchTool` <a name="ResetGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesTool.resetGoogleSearchTool"></a>

```csharp
private void ResetGoogleSearchTool()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesTool.CesTool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesTool.CesTool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPythonFunction` <a name="ResetPythonFunction" id="@cdktn/provider-google.cesTool.CesTool.resetPythonFunction"></a>

```csharp
private void ResetPythonFunction()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesTool.CesTool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesTool.CesTool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesTool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesTool.CesTool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesTool.CesTool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesTool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesTool.CesTool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesTool.CesTool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesTool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cesTool.CesTool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

CesTool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesTool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesTool.CesTool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CesTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.clientFunction">ClientFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference">CesToolClientFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dataStoreTool">DataStoreTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference">CesToolDataStoreToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.generatedSummary">GeneratedSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.googleSearchTool">GoogleSearchTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference">CesToolGoogleSearchToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.openApiTool">OpenApiTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList">CesToolOpenApiToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.pythonFunction">PythonFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference">CesToolPythonFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.systemTool">SystemTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList">CesToolSystemToolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference">CesToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.clientFunctionInput">ClientFunctionInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.dataStoreToolInput">DataStoreToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.executionTypeInput">ExecutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.googleSearchToolInput">GoogleSearchToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.pythonFunctionInput">PythonFunctionInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.executionType">ExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesTool.CesTool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesTool.CesTool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesTool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesTool.CesTool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesTool.CesTool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesTool.CesTool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesTool.CesTool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesTool.CesTool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesTool.CesTool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesTool.CesTool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesTool.CesTool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesTool.CesTool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesTool.CesTool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesTool.CesTool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientFunction`<sup>Required</sup> <a name="ClientFunction" id="@cdktn/provider-google.cesTool.CesTool.property.clientFunction"></a>

```csharp
public CesToolClientFunctionOutputReference ClientFunction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference">CesToolClientFunctionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesTool.CesTool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataStoreTool`<sup>Required</sup> <a name="DataStoreTool" id="@cdktn/provider-google.cesTool.CesTool.property.dataStoreTool"></a>

```csharp
public CesToolDataStoreToolOutputReference DataStoreTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference">CesToolDataStoreToolOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesTool.CesTool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesTool.CesTool.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `GeneratedSummary`<sup>Required</sup> <a name="GeneratedSummary" id="@cdktn/provider-google.cesTool.CesTool.property.generatedSummary"></a>

```csharp
public string GeneratedSummary { get; }
```

- *Type:* string

---

##### `GoogleSearchTool`<sup>Required</sup> <a name="GoogleSearchTool" id="@cdktn/provider-google.cesTool.CesTool.property.googleSearchTool"></a>

```csharp
public CesToolGoogleSearchToolOutputReference GoogleSearchTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference">CesToolGoogleSearchToolOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesTool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenApiTool`<sup>Required</sup> <a name="OpenApiTool" id="@cdktn/provider-google.cesTool.CesTool.property.openApiTool"></a>

```csharp
public CesToolOpenApiToolList OpenApiTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList">CesToolOpenApiToolList</a>

---

##### `PythonFunction`<sup>Required</sup> <a name="PythonFunction" id="@cdktn/provider-google.cesTool.CesTool.property.pythonFunction"></a>

```csharp
public CesToolPythonFunctionOutputReference PythonFunction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference">CesToolPythonFunctionOutputReference</a>

---

##### `SystemTool`<sup>Required</sup> <a name="SystemTool" id="@cdktn/provider-google.cesTool.CesTool.property.systemTool"></a>

```csharp
public CesToolSystemToolList SystemTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList">CesToolSystemToolList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesTool.CesTool.property.timeouts"></a>

```csharp
public CesToolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference">CesToolTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesTool.CesTool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google.cesTool.CesTool.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `ClientFunctionInput`<sup>Optional</sup> <a name="ClientFunctionInput" id="@cdktn/provider-google.cesTool.CesTool.property.clientFunctionInput"></a>

```csharp
public CesToolClientFunction ClientFunctionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---

##### `DataStoreToolInput`<sup>Optional</sup> <a name="DataStoreToolInput" id="@cdktn/provider-google.cesTool.CesTool.property.dataStoreToolInput"></a>

```csharp
public CesToolDataStoreTool DataStoreToolInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---

##### `ExecutionTypeInput`<sup>Optional</sup> <a name="ExecutionTypeInput" id="@cdktn/provider-google.cesTool.CesTool.property.executionTypeInput"></a>

```csharp
public string ExecutionTypeInput { get; }
```

- *Type:* string

---

##### `GoogleSearchToolInput`<sup>Optional</sup> <a name="GoogleSearchToolInput" id="@cdktn/provider-google.cesTool.CesTool.property.googleSearchToolInput"></a>

```csharp
public CesToolGoogleSearchTool GoogleSearchToolInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesTool.CesTool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesTool.CesTool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesTool.CesTool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PythonFunctionInput`<sup>Optional</sup> <a name="PythonFunctionInput" id="@cdktn/provider-google.cesTool.CesTool.property.pythonFunctionInput"></a>

```csharp
public CesToolPythonFunction PythonFunctionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesTool.CesTool.property.timeoutsInput"></a>

```csharp
public IResolvable|CesToolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.cesTool.CesTool.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesTool.CesTool.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="@cdktn/provider-google.cesTool.CesTool.property.executionType"></a>

```csharp
public string ExecutionType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesTool.CesTool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesTool.CesTool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesTool.CesTool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.cesTool.CesTool.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesTool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesTool.CesTool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesToolClientFunction <a name="CesToolClientFunction" id="@cdktn/provider-google.cesTool.CesToolClientFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolClientFunction {
    string Name,
    string Description = null,
    CesToolClientFunctionParameters Parameters = null,
    CesToolClientFunctionResponse Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.name">Name</a></code> | <code>string</code> | The function name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.description">Description</a></code> | <code>string</code> | The function description. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | parameters block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction.property.response">Response</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | response block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.parameters"></a>

```csharp
public CesToolClientFunctionParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#parameters CesTool#parameters}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktn/provider-google.cesTool.CesToolClientFunction.property.response"></a>

```csharp
public CesToolClientFunctionResponse Response { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#response CesTool#response}

---

### CesToolClientFunctionParameters <a name="CesToolClientFunctionParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolClientFunctionParameters {
    string Type,
    string AdditionalProperties = null,
    string AnyOf = null,
    string Default = null,
    string Defs = null,
    string Description = null,
    string[] Enum = null,
    string Items = null,
    double Maximum = null,
    double MaxItems = null,
    double Minimum = null,
    double MinItems = null,
    bool|IResolvable Nullable = null,
    string PrefixItems = null,
    string Properties = null,
    string Ref = null,
    string[] Required = null,
    string Title = null,
    bool|IResolvable UniqueItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.type">Type</a></code> | <code>string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.additionalProperties">AdditionalProperties</a></code> | <code>string</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.anyOf">AnyOf</a></code> | <code>string</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.default">Default</a></code> | <code>string</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.defs">Defs</a></code> | <code>string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.description">Description</a></code> | <code>string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.enum">Enum</a></code> | <code>string[]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.items">Items</a></code> | <code>string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maximum">Maximum</a></code> | <code>double</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maxItems">MaxItems</a></code> | <code>double</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minimum">Minimum</a></code> | <code>double</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minItems">MinItems</a></code> | <code>double</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.nullable">Nullable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.prefixItems">PrefixItems</a></code> | <code>string</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.properties">Properties</a></code> | <code>string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.ref">Ref</a></code> | <code>string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.required">Required</a></code> | <code>string[]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.title">Title</a></code> | <code>string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.uniqueItems">UniqueItems</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#type CesTool#type}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.additionalProperties"></a>

```csharp
public string AdditionalProperties { get; set; }
```

- *Type:* string

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.anyOf"></a>

```csharp
public string AnyOf { get; set; }
```

- *Type:* string

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#default CesTool#default}

---

##### `Defs`<sup>Optional</sup> <a name="Defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.defs"></a>

```csharp
public string Defs { get; set; }
```

- *Type:* string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#defs CesTool#defs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.enum"></a>

```csharp
public string[] Enum { get; set; }
```

- *Type:* string[]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#enum CesTool#enum}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.items"></a>

```csharp
public string Items { get; set; }
```

- *Type:* string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#items CesTool#items}

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

##### `MinItems`<sup>Optional</sup> <a name="MinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.minItems"></a>

```csharp
public double MinItems { get; set; }
```

- *Type:* double

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.nullable"></a>

```csharp
public bool|IResolvable Nullable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

##### `PrefixItems`<sup>Optional</sup> <a name="PrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.prefixItems"></a>

```csharp
public string PrefixItems { get; set; }
```

- *Type:* string

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.properties"></a>

```csharp
public string Properties { get; set; }
```

- *Type:* string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#properties CesTool#properties}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#ref CesTool#ref}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.required"></a>

```csharp
public string[] Required { get; set; }
```

- *Type:* string[]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#required CesTool#required}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#title CesTool#title}

---

##### `UniqueItems`<sup>Optional</sup> <a name="UniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParameters.property.uniqueItems"></a>

```csharp
public bool|IResolvable UniqueItems { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

### CesToolClientFunctionResponse <a name="CesToolClientFunctionResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolClientFunctionResponse {
    string Type,
    string AdditionalProperties = null,
    string AnyOf = null,
    string Default = null,
    string Defs = null,
    string Description = null,
    string[] Enum = null,
    string Items = null,
    double Maximum = null,
    double MaxItems = null,
    double Minimum = null,
    double MinItems = null,
    bool|IResolvable Nullable = null,
    string PrefixItems = null,
    string Properties = null,
    string Ref = null,
    string[] Required = null,
    string Title = null,
    bool|IResolvable UniqueItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.type">Type</a></code> | <code>string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.additionalProperties">AdditionalProperties</a></code> | <code>string</code> | Defines the schema for additional properties allowed in an object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.anyOf">AnyOf</a></code> | <code>string</code> | The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.default">Default</a></code> | <code>string</code> | Default value of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.defs">Defs</a></code> | <code>string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.description">Description</a></code> | <code>string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.enum">Enum</a></code> | <code>string[]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.items">Items</a></code> | <code>string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maximum">Maximum</a></code> | <code>double</code> | Maximum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maxItems">MaxItems</a></code> | <code>double</code> | Maximum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minimum">Minimum</a></code> | <code>double</code> | Minimum value for Type.INTEGER and Type.NUMBER. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minItems">MinItems</a></code> | <code>double</code> | Minimum number of the elements for Type.ARRAY. (int64 format). |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.nullable">Nullable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.prefixItems">PrefixItems</a></code> | <code>string</code> | Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.properties">Properties</a></code> | <code>string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.ref">Ref</a></code> | <code>string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.required">Required</a></code> | <code>string[]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.title">Title</a></code> | <code>string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.uniqueItems">UniqueItems</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#type CesTool#type}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.additionalProperties"></a>

```csharp
public string AdditionalProperties { get; set; }
```

- *Type:* string

Defines the schema for additional properties allowed in an object.

The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.anyOf"></a>

```csharp
public string AnyOf { get; set; }
```

- *Type:* string

The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#any_of CesTool#any_of}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Default value of the data.

Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be compatible
with the defined 'type' and other schema constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#default CesTool#default}

---

##### `Defs`<sup>Optional</sup> <a name="Defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.defs"></a>

```csharp
public string Defs { get; set; }
```

- *Type:* string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#defs CesTool#defs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.enum"></a>

```csharp
public string[] Enum { get; set; }
```

- *Type:* string[]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#enum CesTool#enum}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.items"></a>

```csharp
public string Items { get; set; }
```

- *Type:* string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#items CesTool#items}

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

Maximum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#maximum CesTool#maximum}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Maximum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_items CesTool#max_items}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Minimum value for Type.INTEGER and Type.NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#minimum CesTool#minimum}

---

##### `MinItems`<sup>Optional</sup> <a name="MinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.minItems"></a>

```csharp
public double MinItems { get; set; }
```

- *Type:* double

Minimum number of the elements for Type.ARRAY. (int64 format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#min_items CesTool#min_items}

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.nullable"></a>

```csharp
public bool|IResolvable Nullable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#nullable CesTool#nullable}

---

##### `PrefixItems`<sup>Optional</sup> <a name="PrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.prefixItems"></a>

```csharp
public string PrefixItems { get; set; }
```

- *Type:* string

Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.properties"></a>

```csharp
public string Properties { get; set; }
```

- *Type:* string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#properties CesTool#properties}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#ref CesTool#ref}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.required"></a>

```csharp
public string[] Required { get; set; }
```

- *Type:* string[]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#required CesTool#required}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#title CesTool#title}

---

##### `UniqueItems`<sup>Optional</sup> <a name="UniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponse.property.uniqueItems"></a>

```csharp
public bool|IResolvable UniqueItems { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#unique_items CesTool#unique_items}

---

### CesToolConfig <a name="CesToolConfig" id="@cdktn/provider-google.cesTool.CesToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string Location,
    string ToolId,
    CesToolClientFunction ClientFunction = null,
    CesToolDataStoreTool DataStoreTool = null,
    string ExecutionType = null,
    CesToolGoogleSearchTool GoogleSearchTool = null,
    string Id = null,
    string Project = null,
    CesToolPythonFunction PythonFunction = null,
    CesToolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.toolId">ToolId</a></code> | <code>string</code> | The ID to use for the tool, which will become the final component of the tool's resource name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.clientFunction">ClientFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | client_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.dataStoreTool">DataStoreTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | data_store_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.executionType">ExecutionType</a></code> | <code>string</code> | Possible values: SYNCHRONOUS ASYNCHRONOUS. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.googleSearchTool">GoogleSearchTool</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | google_search_tool block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#id CesTool#id}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#project CesTool#project}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.pythonFunction">PythonFunction</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | python_function block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesTool.CesToolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesTool.CesToolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesTool.CesToolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesTool.CesToolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesTool.CesToolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesTool.CesToolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesTool.CesToolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesTool.CesToolConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#app CesTool#app}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesTool.CesToolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#location CesTool#location}

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.cesTool.CesToolConfig.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

The ID to use for the tool, which will become the final component of the tool's resource name.

If not provided, a unique ID will be
automatically assigned for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#tool_id CesTool#tool_id}

---

##### `ClientFunction`<sup>Optional</sup> <a name="ClientFunction" id="@cdktn/provider-google.cesTool.CesToolConfig.property.clientFunction"></a>

```csharp
public CesToolClientFunction ClientFunction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

client_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#client_function CesTool#client_function}

---

##### `DataStoreTool`<sup>Optional</sup> <a name="DataStoreTool" id="@cdktn/provider-google.cesTool.CesToolConfig.property.dataStoreTool"></a>

```csharp
public CesToolDataStoreTool DataStoreTool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

data_store_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store_tool CesTool#data_store_tool}

---

##### `ExecutionType`<sup>Optional</sup> <a name="ExecutionType" id="@cdktn/provider-google.cesTool.CesToolConfig.property.executionType"></a>

```csharp
public string ExecutionType { get; set; }
```

- *Type:* string

Possible values: SYNCHRONOUS ASYNCHRONOUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#execution_type CesTool#execution_type}

---

##### `GoogleSearchTool`<sup>Optional</sup> <a name="GoogleSearchTool" id="@cdktn/provider-google.cesTool.CesToolConfig.property.googleSearchTool"></a>

```csharp
public CesToolGoogleSearchTool GoogleSearchTool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

google_search_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#google_search_tool CesTool#google_search_tool}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesTool.CesToolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#id CesTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesTool.CesToolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#project CesTool#project}.

---

##### `PythonFunction`<sup>Optional</sup> <a name="PythonFunction" id="@cdktn/provider-google.cesTool.CesToolConfig.property.pythonFunction"></a>

```csharp
public CesToolPythonFunction PythonFunction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

python_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#python_function CesTool#python_function}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesTool.CesToolConfig.property.timeouts"></a>

```csharp
public CesToolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#timeouts CesTool#timeouts}

---

### CesToolDataStoreTool <a name="CesToolDataStoreTool" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreTool {
    string Name,
    IResolvable|CesToolDataStoreToolBoostSpecs[] BoostSpecs = null,
    string Description = null,
    CesToolDataStoreToolEngineSource EngineSource = null,
    double MaxResults = null,
    IResolvable|CesToolDataStoreToolModalityConfigs[] ModalityConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.name">Name</a></code> | <code>string</code> | The data store tool name. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.boostSpecs">BoostSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]</code> | boost_specs block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.description">Description</a></code> | <code>string</code> | The tool description. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.engineSource">EngineSource</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | engine_source block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.maxResults">MaxResults</a></code> | <code>double</code> | Number of search results to return per query. The default value is 10. The maximum allowed value is 10. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.modalityConfigs">ModalityConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]</code> | modality_configs block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The data store tool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `BoostSpecs`<sup>Optional</sup> <a name="BoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.boostSpecs"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecs[] BoostSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_specs CesTool#boost_specs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The tool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `EngineSource`<sup>Optional</sup> <a name="EngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.engineSource"></a>

```csharp
public CesToolDataStoreToolEngineSource EngineSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

engine_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#engine_source CesTool#engine_source}

---

##### `MaxResults`<sup>Optional</sup> <a name="MaxResults" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.maxResults"></a>

```csharp
public double MaxResults { get; set; }
```

- *Type:* double

Number of search results to return per query. The default value is 10. The maximum allowed value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#max_results CesTool#max_results}

---

##### `ModalityConfigs`<sup>Optional</sup> <a name="ModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreTool.property.modalityConfigs"></a>

```csharp
public IResolvable|CesToolDataStoreToolModalityConfigs[] ModalityConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

modality_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#modality_configs CesTool#modality_configs}

---

### CesToolDataStoreToolBoostSpecs <a name="CesToolDataStoreToolBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecs {
    string[] DataStores,
    IResolvable|CesToolDataStoreToolBoostSpecsSpec[] Spec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.dataStores">DataStores</a></code> | <code>string[]</code> | The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.spec">Spec</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]</code> | spec block. |

---

##### `DataStores`<sup>Required</sup> <a name="DataStores" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.dataStores"></a>

```csharp
public string[] DataStores { get; set; }
```

- *Type:* string[]

The Data Store where the boosting configuration is applied. Full resource name of DataStore, such as projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_stores CesTool#data_stores}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs.property.spec"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpec[] Spec { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#spec CesTool#spec}

---

### CesToolDataStoreToolBoostSpecsSpec <a name="CesToolDataStoreToolBoostSpecsSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpec {
    IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] ConditionBoostSpecs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs">ConditionBoostSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]</code> | condition_boost_specs block. |

---

##### `ConditionBoostSpecs`<sup>Required</sup> <a name="ConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec.property.conditionBoostSpecs"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] ConditionBoostSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

condition_boost_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#condition_boost_specs CesTool#condition_boost_specs}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs {
    string Condition,
    double Boost = null,
    CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec BoostControlSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition">Condition</a></code> | <code>string</code> | An expression which specifies a boost condition. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost">Boost</a></code> | <code>double</code> | Strength of the boost, which should be in [-1, 1]. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec">BoostControlSpec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | boost_control_spec block. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

An expression which specifies a boost condition.

The syntax is the same
as filter expression syntax. Currently, the only supported condition is
a list of BCP-47 lang codes.
Example: To boost suggestions in languages en or fr:
(lang_code: ANY("en", "fr"))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#condition CesTool#condition}

---

##### `Boost`<sup>Optional</sup> <a name="Boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boost"></a>

```csharp
public double Boost { get; set; }
```

- *Type:* double

Strength of the boost, which should be in [-1, 1].

Negative boost means
demotion. Default is 0.0.
Setting to 1.0 gives the suggestions a big promotion. However, it does
not necessarily mean that the top result will be a boosted suggestion.
Setting to -1.0 gives the suggestions a big demotion. However, other
suggestions that are relevant might still be shown.
Setting to 0.0 means no boost applied. The boosting condition is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost CesTool#boost}

---

##### `BoostControlSpec`<sup>Optional</sup> <a name="BoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs.property.boostControlSpec"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec BoostControlSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

boost_control_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_control_spec CesTool#boost_control_spec}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec {
    string AttributeType = null,
    IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] ControlPoints = null,
    string FieldName = null,
    string InterpolationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType">AttributeType</a></code> | <code>string</code> | The attribute type to be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints">ControlPoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]</code> | control_points block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType">InterpolationType</a></code> | <code>string</code> | The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR. |

---

##### `AttributeType`<sup>Optional</sup> <a name="AttributeType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.attributeType"></a>

```csharp
public string AttributeType { get; set; }
```

- *Type:* string

The attribute type to be used to determine the boost amount.

The
attribute value can be derived from the field value of the specified
field_name. In the case of numerical it is straightforward i.e.
attribute_value = numerical_field_value. In the case of freshness
however, attribute_value = (time.now() - datetime_field_value).
Possible values:
NUMERICAL
FRESHNESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#attribute_type CesTool#attribute_type}

---

##### `ControlPoints`<sup>Optional</sup> <a name="ControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.controlPoints"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] ControlPoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

control_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#control_points CesTool#control_points}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#field_name CesTool#field_name}

---

##### `InterpolationType`<sup>Optional</sup> <a name="InterpolationType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec.property.interpolationType"></a>

```csharp
public string InterpolationType { get; set; }
```

- *Type:* string

The interpolation type to be applied to connect the control points listed below. Possible values: LINEAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#interpolation_type CesTool#interpolation_type}

---

### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints {
    string AttributeValue = null,
    double BoostAmount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Can be one of: 1. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount">BoostAmount</a></code> | <code>double</code> | The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above. |

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Can be one of: 1.

The numerical field value.
2. The duration spec for freshness:
The value must be formatted as an XSD 'dayTimeDuration' value (a
restricted subset of an ISO 8601 duration value). The pattern for
this is: 'nDnM]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#attribute_value CesTool#attribute_value}

---

##### `BoostAmount`<sup>Optional</sup> <a name="BoostAmount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints.property.boostAmount"></a>

```csharp
public double BoostAmount { get; set; }
```

- *Type:* double

The value between -1 to 1 by which to boost the score if the attribute_value evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#boost_amount CesTool#boost_amount}

---

### CesToolDataStoreToolEngineSource <a name="CesToolDataStoreToolEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSource {
    string Engine,
    IResolvable|CesToolDataStoreToolEngineSourceDataStoreSources[] DataStoreSources = null,
    string Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.engine">Engine</a></code> | <code>string</code> | Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.dataStoreSources">DataStoreSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]</code> | data_store_sources block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.filter">Filter</a></code> | <code>string</code> | A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Full resource name of the Engine. Format: 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#engine CesTool#engine}

---

##### `DataStoreSources`<sup>Optional</sup> <a name="DataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.dataStoreSources"></a>

```csharp
public IResolvable|CesToolDataStoreToolEngineSourceDataStoreSources[] DataStoreSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

data_store_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store_sources CesTool#data_store_sources}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter applied to the search across the Engine. Not relevant and not used if 'data_store_sources' is provided. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#filter CesTool#filter}

---

### CesToolDataStoreToolEngineSourceDataStoreSources <a name="CesToolDataStoreToolEngineSourceDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSources {
    CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore DataStore = null,
    string Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore">DataStore</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | data_store block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.filter">Filter</a></code> | <code>string</code> | Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. |

---

##### `DataStore`<sup>Optional</sup> <a name="DataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.dataStore"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore DataStore { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#data_store CesTool#data_store}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter specification for the DataStore. See: https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#filter CesTool#filter}

---

### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name">Name</a></code> | <code>string</code> | Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Full resource name of the DataStore. Format: 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig {

};
```


### CesToolDataStoreToolModalityConfigs <a name="CesToolDataStoreToolModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigs {
    string ModalityType,
    CesToolDataStoreToolModalityConfigsGroundingConfig GroundingConfig = null,
    CesToolDataStoreToolModalityConfigsRewriterConfig RewriterConfig = null,
    CesToolDataStoreToolModalityConfigsSummarizationConfig SummarizationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.modalityType">ModalityType</a></code> | <code>string</code> | The modality type. Possible values: TEXT AUDIO. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.groundingConfig">GroundingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | grounding_config block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.rewriterConfig">RewriterConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | rewriter_config block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.summarizationConfig">SummarizationConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | summarization_config block. |

---

##### `ModalityType`<sup>Required</sup> <a name="ModalityType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.modalityType"></a>

```csharp
public string ModalityType { get; set; }
```

- *Type:* string

The modality type. Possible values: TEXT AUDIO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#modality_type CesTool#modality_type}

---

##### `GroundingConfig`<sup>Optional</sup> <a name="GroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.groundingConfig"></a>

```csharp
public CesToolDataStoreToolModalityConfigsGroundingConfig GroundingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

grounding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#grounding_config CesTool#grounding_config}

---

##### `RewriterConfig`<sup>Optional</sup> <a name="RewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.rewriterConfig"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfig RewriterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

rewriter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#rewriter_config CesTool#rewriter_config}

---

##### `SummarizationConfig`<sup>Optional</sup> <a name="SummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs.property.summarizationConfig"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfig SummarizationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#summarization_config CesTool#summarization_config}

---

### CesToolDataStoreToolModalityConfigsGroundingConfig <a name="CesToolDataStoreToolModalityConfigsGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsGroundingConfig {
    bool|IResolvable Disabled = null,
    double GroundingLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether grounding is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel">GroundingLevel</a></code> | <code>double</code> | The groundedness threshold of the answer based on the retrieved sources. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether grounding is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `GroundingLevel`<sup>Optional</sup> <a name="GroundingLevel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig.property.groundingLevel"></a>

```csharp
public double GroundingLevel { get; set; }
```

- *Type:* double

The groundedness threshold of the answer based on the retrieved sources.

The value has a configurable range of [1, 5]. The level is used to
threshold the groundedness of the answer, meaning that all responses with
a groundedness score below the threshold will fall back to returning
relevant snippets only.
For example, a level of 3 means that the groundedness score must be
3 or higher for the response to be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#grounding_level CesTool#grounding_level}

---

### CesToolDataStoreToolModalityConfigsRewriterConfig <a name="CesToolDataStoreToolModalityConfigsRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsRewriterConfig {
    CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings ModelSettings,
    bool|IResolvable Disabled = null,
    string Prompt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the rewriter is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt">Prompt</a></code> | <code>string</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.modelSettings"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the rewriter is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `Prompt`<sup>Optional</sup> <a name="Prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

### CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings <a name="CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model CesTool#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

### CesToolDataStoreToolModalityConfigsSummarizationConfig <a name="CesToolDataStoreToolModalityConfigsSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsSummarizationConfig {
    bool|IResolvable Disabled = null,
    CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings ModelSettings = null,
    string Prompt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether summarization is disabled. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt">Prompt</a></code> | <code>string</code> | The prompt definition. If not set, default prompt will be used. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether summarization is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#disabled CesTool#disabled}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.modelSettings"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model_settings CesTool#model_settings}

---

##### `Prompt`<sup>Optional</sup> <a name="Prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

The prompt definition. If not set, default prompt will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#prompt CesTool#prompt}

---

### CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#model CesTool#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#temperature CesTool#temperature}

---

### CesToolGoogleSearchTool <a name="CesToolGoogleSearchTool" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolGoogleSearchTool {
    string Name,
    string[] ContextUrls = null,
    string Description = null,
    string[] ExcludeDomains = null,
    string[] PreferredDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.name">Name</a></code> | <code>string</code> | The name of the tool. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.contextUrls">ContextUrls</a></code> | <code>string[]</code> | Content will be fetched directly from these URLs for context and grounding. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.description">Description</a></code> | <code>string</code> | Description of the tool's purpose. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.excludeDomains">ExcludeDomains</a></code> | <code>string[]</code> | List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.preferredDomains">PreferredDomains</a></code> | <code>string[]</code> | Specifies domain names to guide the search. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `ContextUrls`<sup>Optional</sup> <a name="ContextUrls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.contextUrls"></a>

```csharp
public string[] ContextUrls { get; set; }
```

- *Type:* string[]

Content will be fetched directly from these URLs for context and grounding.

More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#context_urls CesTool#context_urls}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the tool's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#description CesTool#description}

---

##### `ExcludeDomains`<sup>Optional</sup> <a name="ExcludeDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.excludeDomains"></a>

```csharp
public string[] ExcludeDomains { get; set; }
```

- *Type:* string[]

List of domains to be excluded from the search results. Example: "example.com". A maximum of 2000 domains can be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#exclude_domains CesTool#exclude_domains}

---

##### `PreferredDomains`<sup>Optional</sup> <a name="PreferredDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchTool.property.preferredDomains"></a>

```csharp
public string[] PreferredDomains { get; set; }
```

- *Type:* string[]

Specifies domain names to guide the search.

The model will be instructed to prioritize these domains
when formulating queries for google search.
This is a best-effort hint and these domains may or may
not be exclusively reflected in the final search results.
Example: "example.com", "another.site".
A maximum of 20 domains can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#preferred_domains CesTool#preferred_domains}

---

### CesToolOpenApiTool <a name="CesToolOpenApiTool" id="@cdktn/provider-google.cesTool.CesToolOpenApiTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiTool {

};
```


### CesToolOpenApiToolApiAuthentication <a name="CesToolOpenApiToolApiAuthentication" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthentication {

};
```


### CesToolOpenApiToolApiAuthenticationApiKeyConfig <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationApiKeyConfig {

};
```


### CesToolOpenApiToolApiAuthenticationBearerTokenConfig <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationBearerTokenConfig {

};
```


### CesToolOpenApiToolApiAuthenticationOauthConfig <a name="CesToolOpenApiToolApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationOauthConfig {

};
```


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig {

};
```


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig {

};
```


### CesToolOpenApiToolServiceDirectoryConfig <a name="CesToolOpenApiToolServiceDirectoryConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolServiceDirectoryConfig {

};
```


### CesToolOpenApiToolTlsConfig <a name="CesToolOpenApiToolTlsConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolTlsConfig {

};
```


### CesToolOpenApiToolTlsConfigCaCerts <a name="CesToolOpenApiToolTlsConfigCaCerts" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolTlsConfigCaCerts {

};
```


### CesToolPythonFunction <a name="CesToolPythonFunction" id="@cdktn/provider-google.cesTool.CesToolPythonFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolPythonFunction {
    string Name = null,
    string PythonCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction.property.name">Name</a></code> | <code>string</code> | The name of the Python function to execute. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction.property.pythonCode">PythonCode</a></code> | <code>string</code> | The Python code to execute for the tool. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Python function to execute.

Must match a Python function
name defined in the python code. Case sensitive. If the name is not
provided, the first function defined in the python code will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#name CesTool#name}

---

##### `PythonCode`<sup>Optional</sup> <a name="PythonCode" id="@cdktn/provider-google.cesTool.CesToolPythonFunction.property.pythonCode"></a>

```csharp
public string PythonCode { get; set; }
```

- *Type:* string

The Python code to execute for the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#python_code CesTool#python_code}

---

### CesToolSystemTool <a name="CesToolSystemTool" id="@cdktn/provider-google.cesTool.CesToolSystemTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolSystemTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolSystemTool {

};
```


### CesToolTimeouts <a name="CesToolTimeouts" id="@cdktn/provider-google.cesTool.CesToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesTool.CesToolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#create CesTool#create}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#delete CesTool#delete}. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#update CesTool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#create CesTool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#delete CesTool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesTool.CesToolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/ces_tool#update CesTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesToolClientFunctionOutputReference <a name="CesToolClientFunctionOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolClientFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse">PutResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters"></a>

```csharp
private void PutParameters(CesToolClientFunctionParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---

##### `PutResponse` <a name="PutResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse"></a>

```csharp
private void PutResponse(CesToolClientFunctionResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference">CesToolClientFunctionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.response">Response</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference">CesToolClientFunctionResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.responseInput">ResponseInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parameters"></a>

```csharp
public CesToolClientFunctionParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference">CesToolClientFunctionParametersOutputReference</a>

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.response"></a>

```csharp
public CesToolClientFunctionResponseOutputReference Response { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference">CesToolClientFunctionResponseOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.parametersInput"></a>

```csharp
public CesToolClientFunctionParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.responseInput"></a>

```csharp
public CesToolClientFunctionResponse ResponseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolClientFunctionOutputReference.property.internalValue"></a>

```csharp
public CesToolClientFunction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunction">CesToolClientFunction</a>

---


### CesToolClientFunctionParametersOutputReference <a name="CesToolClientFunctionParametersOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolClientFunctionParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefs">ResetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetItems">ResetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinItems">ResetMinItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetPrefixItems">ResetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetUniqueItems">ResetUniqueItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDefs` <a name="ResetDefs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDefs"></a>

```csharp
private void ResetDefs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetMinItems` <a name="ResetMinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetMinItems"></a>

```csharp
private void ResetMinItems()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPrefixItems` <a name="ResetPrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetPrefixItems"></a>

```csharp
private void ResetPrefixItems()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetUniqueItems` <a name="ResetUniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.resetUniqueItems"></a>

```csharp
private void ResetUniqueItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defsInput">DefsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enumInput">EnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItemsInput">MinItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullableInput">NullableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItemsInput">PrefixItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItemsInput">UniqueItemsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOf">AnyOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defs">Defs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enum">Enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.items">Items</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItems">MinItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullable">Nullable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItems">PrefixItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.properties">Properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.required">Required</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItems">UniqueItems</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string AdditionalPropertiesInput { get; }
```

- *Type:* string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOfInput"></a>

```csharp
public string AnyOfInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DefsInput`<sup>Optional</sup> <a name="DefsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defsInput"></a>

```csharp
public string DefsInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enumInput"></a>

```csharp
public string[] EnumInput { get; }
```

- *Type:* string[]

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.itemsInput"></a>

```csharp
public string ItemsInput { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `MinItemsInput`<sup>Optional</sup> <a name="MinItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItemsInput"></a>

```csharp
public double MinItemsInput { get; }
```

- *Type:* double

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullableInput"></a>

```csharp
public bool|IResolvable NullableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixItemsInput`<sup>Optional</sup> <a name="PrefixItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItemsInput"></a>

```csharp
public string PrefixItemsInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.propertiesInput"></a>

```csharp
public string PropertiesInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.requiredInput"></a>

```csharp
public string[] RequiredInput { get; }
```

- *Type:* string[]

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UniqueItemsInput`<sup>Optional</sup> <a name="UniqueItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItemsInput"></a>

```csharp
public bool|IResolvable UniqueItemsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.additionalProperties"></a>

```csharp
public string AdditionalProperties { get; }
```

- *Type:* string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.anyOf"></a>

```csharp
public string AnyOf { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Defs`<sup>Required</sup> <a name="Defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.defs"></a>

```csharp
public string Defs { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.enum"></a>

```csharp
public string[] Enum { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.items"></a>

```csharp
public string Items { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `MinItems`<sup>Required</sup> <a name="MinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.minItems"></a>

```csharp
public double MinItems { get; }
```

- *Type:* double

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.nullable"></a>

```csharp
public bool|IResolvable Nullable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixItems`<sup>Required</sup> <a name="PrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.prefixItems"></a>

```csharp
public string PrefixItems { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.properties"></a>

```csharp
public string Properties { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.required"></a>

```csharp
public string[] Required { get; }
```

- *Type:* string[]

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueItems`<sup>Required</sup> <a name="UniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.uniqueItems"></a>

```csharp
public bool|IResolvable UniqueItems { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolClientFunctionParametersOutputReference.property.internalValue"></a>

```csharp
public CesToolClientFunctionParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionParameters">CesToolClientFunctionParameters</a>

---


### CesToolClientFunctionResponseOutputReference <a name="CesToolClientFunctionResponseOutputReference" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolClientFunctionResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefs">ResetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetItems">ResetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinItems">ResetMinItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetPrefixItems">ResetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetUniqueItems">ResetUniqueItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDefs` <a name="ResetDefs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDefs"></a>

```csharp
private void ResetDefs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetMinItems` <a name="ResetMinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetMinItems"></a>

```csharp
private void ResetMinItems()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPrefixItems` <a name="ResetPrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetPrefixItems"></a>

```csharp
private void ResetPrefixItems()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetUniqueItems` <a name="ResetUniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.resetUniqueItems"></a>

```csharp
private void ResetUniqueItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defsInput">DefsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enumInput">EnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItemsInput">MinItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullableInput">NullableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItemsInput">PrefixItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.requiredInput">RequiredInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItemsInput">UniqueItemsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOf">AnyOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defs">Defs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enum">Enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.items">Items</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItems">MinItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullable">Nullable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItems">PrefixItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.properties">Properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.required">Required</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItems">UniqueItems</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string AdditionalPropertiesInput { get; }
```

- *Type:* string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOfInput"></a>

```csharp
public string AnyOfInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DefsInput`<sup>Optional</sup> <a name="DefsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defsInput"></a>

```csharp
public string DefsInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enumInput"></a>

```csharp
public string[] EnumInput { get; }
```

- *Type:* string[]

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.itemsInput"></a>

```csharp
public string ItemsInput { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `MinItemsInput`<sup>Optional</sup> <a name="MinItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItemsInput"></a>

```csharp
public double MinItemsInput { get; }
```

- *Type:* double

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullableInput"></a>

```csharp
public bool|IResolvable NullableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixItemsInput`<sup>Optional</sup> <a name="PrefixItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItemsInput"></a>

```csharp
public string PrefixItemsInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.propertiesInput"></a>

```csharp
public string PropertiesInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.requiredInput"></a>

```csharp
public string[] RequiredInput { get; }
```

- *Type:* string[]

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UniqueItemsInput`<sup>Optional</sup> <a name="UniqueItemsInput" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItemsInput"></a>

```csharp
public bool|IResolvable UniqueItemsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.additionalProperties"></a>

```csharp
public string AdditionalProperties { get; }
```

- *Type:* string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.anyOf"></a>

```csharp
public string AnyOf { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Defs`<sup>Required</sup> <a name="Defs" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.defs"></a>

```csharp
public string Defs { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.enum"></a>

```csharp
public string[] Enum { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.items"></a>

```csharp
public string Items { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `MinItems`<sup>Required</sup> <a name="MinItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.minItems"></a>

```csharp
public double MinItems { get; }
```

- *Type:* double

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.nullable"></a>

```csharp
public bool|IResolvable Nullable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixItems`<sup>Required</sup> <a name="PrefixItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.prefixItems"></a>

```csharp
public string PrefixItems { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.properties"></a>

```csharp
public string Properties { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.required"></a>

```csharp
public string[] Required { get; }
```

- *Type:* string[]

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueItems`<sup>Required</sup> <a name="UniqueItems" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.uniqueItems"></a>

```csharp
public bool|IResolvable UniqueItems { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolClientFunctionResponseOutputReference.property.internalValue"></a>

```csharp
public CesToolClientFunctionResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolClientFunctionResponse">CesToolClientFunctionResponse</a>

---


### CesToolDataStoreToolBoostSpecsList <a name="CesToolDataStoreToolBoostSpecsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get"></a>

```csharp
private CesToolDataStoreToolBoostSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

---


### CesToolDataStoreToolBoostSpecsOutputReference <a name="CesToolDataStoreToolBoostSpecsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec">PutSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec"></a>

```csharp
private void PutSpec(IResolvable|CesToolDataStoreToolBoostSpecsSpec[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.putSpec.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList">CesToolDataStoreToolBoostSpecsSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput">DataStoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStores">DataStores</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.spec"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecList Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList">CesToolDataStoreToolBoostSpecsSpecList</a>

---

##### `DataStoresInput`<sup>Optional</sup> <a name="DataStoresInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStoresInput"></a>

```csharp
public string[] DataStoresInput { get; }
```

- *Type:* string[]

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.specInput"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpec[] SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

---

##### `DataStores`<sup>Required</sup> <a name="DataStores" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.dataStores"></a>

```csharp
public string[] DataStores { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get"></a>

```csharp
private CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount">ResetBoostAmount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetBoostAmount` <a name="ResetBoostAmount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.resetBoostAmount"></a>

```csharp
private void ResetBoostAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput">BoostAmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount">BoostAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `BoostAmountInput`<sup>Optional</sup> <a name="BoostAmountInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmountInput"></a>

```csharp
public double BoostAmountInput { get; }
```

- *Type:* double

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `BoostAmount`<sup>Required</sup> <a name="BoostAmount" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.boostAmount"></a>

```csharp
public double BoostAmount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints">PutControlPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType">ResetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints">ResetControlPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType">ResetInterpolationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPoints` <a name="PutControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints"></a>

```csharp
private void PutControlPoints(IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.putControlPoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

---

##### `ResetAttributeType` <a name="ResetAttributeType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetAttributeType"></a>

```csharp
private void ResetAttributeType()
```

##### `ResetControlPoints` <a name="ResetControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetControlPoints"></a>

```csharp
private void ResetControlPoints()
```

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetInterpolationType` <a name="ResetInterpolationType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.resetInterpolationType"></a>

```csharp
private void ResetInterpolationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints">ControlPoints</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput">ControlPointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput">InterpolationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType">AttributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType">InterpolationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPoints`<sup>Required</sup> <a name="ControlPoints" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPoints"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList ControlPoints { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList</a>

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeTypeInput"></a>

```csharp
public string AttributeTypeInput { get; }
```

- *Type:* string

---

##### `ControlPointsInput`<sup>Optional</sup> <a name="ControlPointsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.controlPointsInput"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] ControlPointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints</a>[]

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `InterpolationTypeInput`<sup>Optional</sup> <a name="InterpolationTypeInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationTypeInput"></a>

```csharp
public string InterpolationTypeInput { get; }
```

- *Type:* string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.attributeType"></a>

```csharp
public string AttributeType { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InterpolationType`<sup>Required</sup> <a name="InterpolationType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.interpolationType"></a>

```csharp
public string InterpolationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get"></a>

```csharp
private CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

---


### CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec">PutBoostControlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost">ResetBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec">ResetBoostControlSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoostControlSpec` <a name="PutBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec"></a>

```csharp
private void PutBoostControlSpec(CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.putBoostControlSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---

##### `ResetBoost` <a name="ResetBoost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoost"></a>

```csharp
private void ResetBoost()
```

##### `ResetBoostControlSpec` <a name="ResetBoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.resetBoostControlSpec"></a>

```csharp
private void ResetBoostControlSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec">BoostControlSpec</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput">BoostControlSpecInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput">BoostInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost">Boost</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoostControlSpec`<sup>Required</sup> <a name="BoostControlSpec" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpec"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference BoostControlSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference</a>

---

##### `BoostControlSpecInput`<sup>Optional</sup> <a name="BoostControlSpecInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostControlSpecInput"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec BoostControlSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec</a>

---

##### `BoostInput`<sup>Optional</sup> <a name="BoostInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boostInput"></a>

```csharp
public double BoostInput { get; }
```

- *Type:* double

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `Boost`<sup>Required</sup> <a name="Boost" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.boost"></a>

```csharp
public double Boost { get; }
```

- *Type:* double

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>

---


### CesToolDataStoreToolBoostSpecsSpecList <a name="CesToolDataStoreToolBoostSpecsSpecList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get"></a>

```csharp
private CesToolDataStoreToolBoostSpecsSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecList.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpec[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>[]

---


### CesToolDataStoreToolBoostSpecsSpecOutputReference <a name="CesToolDataStoreToolBoostSpecsSpecOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolBoostSpecsSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs">PutConditionBoostSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionBoostSpecs` <a name="PutConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs"></a>

```csharp
private void PutConditionBoostSpecs(IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.putConditionBoostSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs">ConditionBoostSpecs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput">ConditionBoostSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionBoostSpecs`<sup>Required</sup> <a name="ConditionBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecs"></a>

```csharp
public CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList ConditionBoostSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList</a>

---

##### `ConditionBoostSpecsInput`<sup>Optional</sup> <a name="ConditionBoostSpecsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.conditionBoostSpecsInput"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] ConditionBoostSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs">CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecsSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsSpec">CesToolDataStoreToolBoostSpecsSpec</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get"></a>

```csharp
private CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection">Collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collection"></a>

```csharp
public string Collection { get; }
```

- *Type:* string

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.collectionDisplayName"></a>

```csharp
public string CollectionDisplayName { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig">ConnectorConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode">DocumentProcessingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorConfig`<sup>Required</sup> <a name="ConnectorConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.connectorConfig"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList ConnectorConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocumentProcessingMode`<sup>Required</sup> <a name="DocumentProcessingMode" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.documentProcessingMode"></a>

```csharp
public string DocumentProcessingMode { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesList <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get"></a>

```csharp
private CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolEngineSourceDataStoreSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

---


### CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference <a name="CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore">PutDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore">ResetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStore` <a name="PutDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore"></a>

```csharp
private void PutDataStore(CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---

##### `ResetDataStore` <a name="ResetDataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetDataStore"></a>

```csharp
private void ResetDataStore()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore">DataStore</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStore"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference DataStore { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.dataStoreInput"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore DataStoreInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore">CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolEngineSourceDataStoreSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>

---


### CesToolDataStoreToolEngineSourceOutputReference <a name="CesToolDataStoreToolEngineSourceOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolEngineSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources">PutDataStoreSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources">ResetDataStoreSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStoreSources` <a name="PutDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources"></a>

```csharp
private void PutDataStoreSources(IResolvable|CesToolDataStoreToolEngineSourceDataStoreSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.putDataStoreSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

---

##### `ResetDataStoreSources` <a name="ResetDataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetDataStoreSources"></a>

```csharp
private void ResetDataStoreSources()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources">DataStoreSources</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList">CesToolDataStoreToolEngineSourceDataStoreSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput">DataStoreSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreSources`<sup>Required</sup> <a name="DataStoreSources" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSources"></a>

```csharp
public CesToolDataStoreToolEngineSourceDataStoreSourcesList DataStoreSources { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSourcesList">CesToolDataStoreToolEngineSourceDataStoreSourcesList</a>

---

##### `DataStoreSourcesInput`<sup>Optional</sup> <a name="DataStoreSourcesInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.dataStoreSourcesInput"></a>

```csharp
public IResolvable|CesToolDataStoreToolEngineSourceDataStoreSources[] DataStoreSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceDataStoreSources">CesToolDataStoreToolEngineSourceDataStoreSources</a>[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolEngineSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---


### CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel">ResetGroundingLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetGroundingLevel` <a name="ResetGroundingLevel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.resetGroundingLevel"></a>

```csharp
private void ResetGroundingLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput">GroundingLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel">GroundingLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GroundingLevelInput`<sup>Optional</sup> <a name="GroundingLevelInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevelInput"></a>

```csharp
public double GroundingLevelInput { get; }
```

- *Type:* double

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GroundingLevel`<sup>Required</sup> <a name="GroundingLevel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.groundingLevel"></a>

```csharp
public double GroundingLevel { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolModalityConfigsGroundingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---


### CesToolDataStoreToolModalityConfigsList <a name="CesToolDataStoreToolModalityConfigsList" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get"></a>

```csharp
private CesToolDataStoreToolModalityConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolModalityConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

---


### CesToolDataStoreToolModalityConfigsOutputReference <a name="CesToolDataStoreToolModalityConfigsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig">PutGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig">PutRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig">PutSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig">ResetGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig">ResetRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig">ResetSummarizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroundingConfig` <a name="PutGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig"></a>

```csharp
private void PutGroundingConfig(CesToolDataStoreToolModalityConfigsGroundingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putGroundingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---

##### `PutRewriterConfig` <a name="PutRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig"></a>

```csharp
private void PutRewriterConfig(CesToolDataStoreToolModalityConfigsRewriterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putRewriterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---

##### `PutSummarizationConfig` <a name="PutSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig"></a>

```csharp
private void PutSummarizationConfig(CesToolDataStoreToolModalityConfigsSummarizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---

##### `ResetGroundingConfig` <a name="ResetGroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetGroundingConfig"></a>

```csharp
private void ResetGroundingConfig()
```

##### `ResetRewriterConfig` <a name="ResetRewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetRewriterConfig"></a>

```csharp
private void ResetRewriterConfig()
```

##### `ResetSummarizationConfig` <a name="ResetSummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.resetSummarizationConfig"></a>

```csharp
private void ResetSummarizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig">GroundingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig">RewriterConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig">SummarizationConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput">GroundingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput">ModalityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput">RewriterConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput">SummarizationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityType">ModalityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroundingConfig`<sup>Required</sup> <a name="GroundingConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfig"></a>

```csharp
public CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference GroundingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference">CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference</a>

---

##### `RewriterConfig`<sup>Required</sup> <a name="RewriterConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfig"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference RewriterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference</a>

---

##### `SummarizationConfig`<sup>Required</sup> <a name="SummarizationConfig" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfig"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference SummarizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference</a>

---

##### `GroundingConfigInput`<sup>Optional</sup> <a name="GroundingConfigInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.groundingConfigInput"></a>

```csharp
public CesToolDataStoreToolModalityConfigsGroundingConfig GroundingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsGroundingConfig">CesToolDataStoreToolModalityConfigsGroundingConfig</a>

---

##### `ModalityTypeInput`<sup>Optional</sup> <a name="ModalityTypeInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityTypeInput"></a>

```csharp
public string ModalityTypeInput { get; }
```

- *Type:* string

---

##### `RewriterConfigInput`<sup>Optional</sup> <a name="RewriterConfigInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.rewriterConfigInput"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfig RewriterConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---

##### `SummarizationConfigInput`<sup>Optional</sup> <a name="SummarizationConfigInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.summarizationConfigInput"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfig SummarizationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---

##### `ModalityType`<sup>Required</sup> <a name="ModalityType" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.modalityType"></a>

```csharp
public string ModalityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolDataStoreToolModalityConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>

---


### CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference <a name="CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---


### CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt">ResetPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings"></a>

```csharp
private void PutModelSettings(CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetPrompt` <a name="ResetPrompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.resetPrompt"></a>

```csharp
private void ResetPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettings"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.modelSettingsInput"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings">CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings</a>

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolModalityConfigsRewriterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsRewriterConfig">CesToolDataStoreToolModalityConfigsRewriterConfig</a>

---


### CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---


### CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference <a name="CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings">ResetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt">ResetPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings"></a>

```csharp
private void PutModelSettings(CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```

##### `ResetPrompt` <a name="ResetPrompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.resetPrompt"></a>

```csharp
private void ResetPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettings"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.modelSettingsInput"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings">CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings</a>

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreToolModalityConfigsSummarizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsSummarizationConfig">CesToolDataStoreToolModalityConfigsSummarizationConfig</a>

---


### CesToolDataStoreToolOutputReference <a name="CesToolDataStoreToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolDataStoreToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs">PutBoostSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource">PutEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs">PutModalityConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetBoostSpecs">ResetBoostSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetEngineSource">ResetEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetMaxResults">ResetMaxResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetModalityConfigs">ResetModalityConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoostSpecs` <a name="PutBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs"></a>

```csharp
private void PutBoostSpecs(IResolvable|CesToolDataStoreToolBoostSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putBoostSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

---

##### `PutEngineSource` <a name="PutEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource"></a>

```csharp
private void PutEngineSource(CesToolDataStoreToolEngineSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putEngineSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---

##### `PutModalityConfigs` <a name="PutModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs"></a>

```csharp
private void PutModalityConfigs(IResolvable|CesToolDataStoreToolModalityConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.putModalityConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

---

##### `ResetBoostSpecs` <a name="ResetBoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetBoostSpecs"></a>

```csharp
private void ResetBoostSpecs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEngineSource` <a name="ResetEngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetEngineSource"></a>

```csharp
private void ResetEngineSource()
```

##### `ResetMaxResults` <a name="ResetMaxResults" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetMaxResults"></a>

```csharp
private void ResetMaxResults()
```

##### `ResetModalityConfigs` <a name="ResetModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.resetModalityConfigs"></a>

```csharp
private void ResetModalityConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecs">BoostSpecs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList">CesToolDataStoreToolBoostSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSource">EngineSource</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference">CesToolDataStoreToolEngineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigs">ModalityConfigs</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList">CesToolDataStoreToolModalityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecsInput">BoostSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSourceInput">EngineSourceInput</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResultsInput">MaxResultsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigsInput">ModalityConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResults">MaxResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoostSpecs`<sup>Required</sup> <a name="BoostSpecs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecs"></a>

```csharp
public CesToolDataStoreToolBoostSpecsList BoostSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecsList">CesToolDataStoreToolBoostSpecsList</a>

---

##### `EngineSource`<sup>Required</sup> <a name="EngineSource" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSource"></a>

```csharp
public CesToolDataStoreToolEngineSourceOutputReference EngineSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSourceOutputReference">CesToolDataStoreToolEngineSourceOutputReference</a>

---

##### `ModalityConfigs`<sup>Required</sup> <a name="ModalityConfigs" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigs"></a>

```csharp
public CesToolDataStoreToolModalityConfigsList ModalityConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigsList">CesToolDataStoreToolModalityConfigsList</a>

---

##### `BoostSpecsInput`<sup>Optional</sup> <a name="BoostSpecsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.boostSpecsInput"></a>

```csharp
public IResolvable|CesToolDataStoreToolBoostSpecs[] BoostSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolBoostSpecs">CesToolDataStoreToolBoostSpecs</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineSourceInput`<sup>Optional</sup> <a name="EngineSourceInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.engineSourceInput"></a>

```csharp
public CesToolDataStoreToolEngineSource EngineSourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolEngineSource">CesToolDataStoreToolEngineSource</a>

---

##### `MaxResultsInput`<sup>Optional</sup> <a name="MaxResultsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResultsInput"></a>

```csharp
public double MaxResultsInput { get; }
```

- *Type:* double

---

##### `ModalityConfigsInput`<sup>Optional</sup> <a name="ModalityConfigsInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.modalityConfigsInput"></a>

```csharp
public IResolvable|CesToolDataStoreToolModalityConfigs[] ModalityConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolDataStoreToolModalityConfigs">CesToolDataStoreToolModalityConfigs</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.maxResults"></a>

```csharp
public double MaxResults { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolDataStoreToolOutputReference.property.internalValue"></a>

```csharp
public CesToolDataStoreTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolDataStoreTool">CesToolDataStoreTool</a>

---


### CesToolGoogleSearchToolOutputReference <a name="CesToolGoogleSearchToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolGoogleSearchToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetContextUrls">ResetContextUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetExcludeDomains">ResetExcludeDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetPreferredDomains">ResetPreferredDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContextUrls` <a name="ResetContextUrls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetContextUrls"></a>

```csharp
private void ResetContextUrls()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludeDomains` <a name="ResetExcludeDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetExcludeDomains"></a>

```csharp
private void ResetExcludeDomains()
```

##### `ResetPreferredDomains` <a name="ResetPreferredDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.resetPreferredDomains"></a>

```csharp
private void ResetPreferredDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrlsInput">ContextUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomainsInput">ExcludeDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomainsInput">PreferredDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrls">ContextUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomains">ExcludeDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomains">PreferredDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextUrlsInput`<sup>Optional</sup> <a name="ContextUrlsInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrlsInput"></a>

```csharp
public string[] ContextUrlsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludeDomainsInput`<sup>Optional</sup> <a name="ExcludeDomainsInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomainsInput"></a>

```csharp
public string[] ExcludeDomainsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreferredDomainsInput`<sup>Optional</sup> <a name="PreferredDomainsInput" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomainsInput"></a>

```csharp
public string[] PreferredDomainsInput { get; }
```

- *Type:* string[]

---

##### `ContextUrls`<sup>Required</sup> <a name="ContextUrls" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.contextUrls"></a>

```csharp
public string[] ContextUrls { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludeDomains`<sup>Required</sup> <a name="ExcludeDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.excludeDomains"></a>

```csharp
public string[] ExcludeDomains { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreferredDomains`<sup>Required</sup> <a name="PreferredDomains" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.preferredDomains"></a>

```csharp
public string[] PreferredDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolGoogleSearchToolOutputReference.property.internalValue"></a>

```csharp
public CesToolGoogleSearchTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolGoogleSearchTool">CesToolGoogleSearchTool</a>

---


### CesToolOpenApiToolApiAuthenticationApiKeyConfigList <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationApiKeyConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get"></a>

```csharp
private CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig">CesToolOpenApiToolApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```csharp
public string ApiKeySecretVersion { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```csharp
public string RequestLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfig">CesToolOpenApiToolApiAuthenticationApiKeyConfig</a>

---


### CesToolOpenApiToolApiAuthenticationBearerTokenConfigList <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationBearerTokenConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get"></a>

```csharp
private CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig">CesToolOpenApiToolApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationBearerTokenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfig">CesToolOpenApiToolApiAuthenticationBearerTokenConfig</a>

---


### CesToolOpenApiToolApiAuthenticationList <a name="CesToolOpenApiToolApiAuthenticationList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get"></a>

```csharp
private CesToolOpenApiToolApiAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationOauthConfigList <a name="CesToolOpenApiToolApiAuthenticationOauthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationOauthConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get"></a>

```csharp
private CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig">CesToolOpenApiToolApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```csharp
public string ClientSecretVersion { get; }
```

- *Type:* string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfig">CesToolOpenApiToolApiAuthenticationOauthConfig</a>

---


### CesToolOpenApiToolApiAuthenticationOutputReference <a name="CesToolOpenApiToolApiAuthenticationOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList">CesToolOpenApiToolApiAuthenticationApiKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList">CesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList">CesToolOpenApiToolApiAuthenticationOauthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig">ServiceAgentIdTokenAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication">CesToolOpenApiToolApiAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationApiKeyConfigList ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationApiKeyConfigList">CesToolOpenApiToolApiAuthenticationApiKeyConfigList</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationBearerTokenConfigList BearerTokenConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationBearerTokenConfigList">CesToolOpenApiToolApiAuthenticationBearerTokenConfigList</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.oauthConfig"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationOauthConfigList OauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOauthConfigList">CesToolOpenApiToolApiAuthenticationOauthConfigList</a>

---

##### `ServiceAccountAuthConfig`<sup>Required</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList ServiceAccountAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList</a>

---

##### `ServiceAgentIdTokenAuthConfig`<sup>Required</sup> <a name="ServiceAgentIdTokenAuthConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.serviceAgentIdTokenAuthConfig"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList ServiceAgentIdTokenAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolApiAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthentication">CesToolOpenApiToolApiAuthentication</a>

---


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get"></a>

```csharp
private CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig</a>

---


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get"></a>

```csharp
private CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference <a name="CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig">CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig</a>

---


### CesToolOpenApiToolList <a name="CesToolOpenApiToolList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get"></a>

```csharp
private CesToolOpenApiToolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolOutputReference <a name="CesToolOpenApiToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList">CesToolOpenApiToolApiAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.ignoreUnknownFields">IgnoreUnknownFields</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.openApiSchema">OpenApiSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList">CesToolOpenApiToolServiceDirectoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList">CesToolOpenApiToolTlsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiTool">CesToolOpenApiTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.apiAuthentication"></a>

```csharp
public CesToolOpenApiToolApiAuthenticationList ApiAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolApiAuthenticationList">CesToolOpenApiToolApiAuthenticationList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IgnoreUnknownFields`<sup>Required</sup> <a name="IgnoreUnknownFields" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.ignoreUnknownFields"></a>

```csharp
public IResolvable IgnoreUnknownFields { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenApiSchema`<sup>Required</sup> <a name="OpenApiSchema" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.openApiSchema"></a>

```csharp
public string OpenApiSchema { get; }
```

- *Type:* string

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public CesToolOpenApiToolServiceDirectoryConfigList ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList">CesToolOpenApiToolServiceDirectoryConfigList</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.tlsConfig"></a>

```csharp
public CesToolOpenApiToolTlsConfigList TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList">CesToolOpenApiToolTlsConfigList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiTool">CesToolOpenApiTool</a>

---


### CesToolOpenApiToolServiceDirectoryConfigList <a name="CesToolOpenApiToolServiceDirectoryConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolServiceDirectoryConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get"></a>

```csharp
private CesToolOpenApiToolServiceDirectoryConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolServiceDirectoryConfigOutputReference <a name="CesToolOpenApiToolServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig">CesToolOpenApiToolServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolServiceDirectoryConfig">CesToolOpenApiToolServiceDirectoryConfig</a>

---


### CesToolOpenApiToolTlsConfigCaCertsList <a name="CesToolOpenApiToolTlsConfigCaCertsList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolTlsConfigCaCertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get"></a>

```csharp
private CesToolOpenApiToolTlsConfigCaCertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolTlsConfigCaCertsOutputReference <a name="CesToolOpenApiToolTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolTlsConfigCaCertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts">CesToolOpenApiToolTlsConfigCaCerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolTlsConfigCaCerts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCerts">CesToolOpenApiToolTlsConfigCaCerts</a>

---


### CesToolOpenApiToolTlsConfigList <a name="CesToolOpenApiToolTlsConfigList" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolTlsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get"></a>

```csharp
private CesToolOpenApiToolTlsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolOpenApiToolTlsConfigOutputReference <a name="CesToolOpenApiToolTlsConfigOutputReference" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolOpenApiToolTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList">CesToolOpenApiToolTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig">CesToolOpenApiToolTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.caCerts"></a>

```csharp
public CesToolOpenApiToolTlsConfigCaCertsList CaCerts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigCaCertsList">CesToolOpenApiToolTlsConfigCaCertsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfigOutputReference.property.internalValue"></a>

```csharp
public CesToolOpenApiToolTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolOpenApiToolTlsConfig">CesToolOpenApiToolTlsConfig</a>

---


### CesToolPythonFunctionOutputReference <a name="CesToolPythonFunctionOutputReference" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolPythonFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetPythonCode">ResetPythonCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPythonCode` <a name="ResetPythonCode" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.resetPythonCode"></a>

```csharp
private void ResetPythonCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCode">PythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCodeInput"></a>

```csharp
public string PythonCodeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.pythonCode"></a>

```csharp
public string PythonCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolPythonFunctionOutputReference.property.internalValue"></a>

```csharp
public CesToolPythonFunction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolPythonFunction">CesToolPythonFunction</a>

---


### CesToolSystemToolList <a name="CesToolSystemToolList" id="@cdktn/provider-google.cesTool.CesToolSystemToolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolSystemToolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.get"></a>

```csharp
private CesToolSystemToolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CesToolSystemToolOutputReference <a name="CesToolSystemToolOutputReference" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolSystemToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesTool.CesToolSystemTool">CesToolSystemTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolSystemToolOutputReference.property.internalValue"></a>

```csharp
public CesToolSystemTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cesTool.CesToolSystemTool">CesToolSystemTool</a>

---


### CesToolTimeoutsOutputReference <a name="CesToolTimeoutsOutputReference" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CesToolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesTool.CesToolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CesToolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cesTool.CesToolTimeouts">CesToolTimeouts</a>

---



