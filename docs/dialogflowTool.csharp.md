# `dialogflowTool` Submodule <a name="`dialogflowTool` Submodule" id="@cdktn/provider-google.dialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowTool <a name="DialogflowTool" id="@cdktn/provider-google.dialogflowTool.DialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowTool(Construct Scope, string Id, DialogflowToolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig">DialogflowToolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig">DialogflowToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec">PutConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec">PutFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec">PutOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement">ResetActionConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec">ResetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec">ResetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec">ResetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectorSpec` <a name="PutConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec"></a>

```csharp
private void PutConnectorSpec(DialogflowToolConnectorSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `PutFunctionSpec` <a name="PutFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec"></a>

```csharp
private void PutFunctionSpec(DialogflowToolFunctionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `PutOpenApiSpec` <a name="PutOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec"></a>

```csharp
private void PutOpenApiSpec(DialogflowToolOpenApiSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowToolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `ResetActionConfirmationRequirement` <a name="ResetActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement"></a>

```csharp
private void ResetActionConfirmationRequirement()
```

##### `ResetConnectorSpec` <a name="ResetConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec"></a>

```csharp
private void ResetConnectorSpec()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFunctionSpec` <a name="ResetFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec"></a>

```csharp
private void ResetFunctionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpenApiSpec` <a name="ResetOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec"></a>

```csharp
private void ResetOpenApiSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId"></a>

```csharp
private void ResetToolId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowTool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowTool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowTool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowTool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowTool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec">ConnectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi">SatisfiesPzi</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput">ActionConfirmationRequirementInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput">ConnectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput">FunctionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput">OpenApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput">ToolKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement">ActionConfirmationRequirement</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey">ToolKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectorSpec`<sup>Required</sup> <a name="ConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec"></a>

```csharp
public DialogflowToolConnectorSpecOutputReference ConnectorSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `FunctionSpec`<sup>Required</sup> <a name="FunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec"></a>

```csharp
public DialogflowToolFunctionSpecOutputReference FunctionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenApiSpec`<sup>Required</sup> <a name="OpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec"></a>

```csharp
public DialogflowToolOpenApiSpecOutputReference OpenApiSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a>

---

##### `SatisfiesPzi`<sup>Required</sup> <a name="SatisfiesPzi" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi"></a>

```csharp
public IResolvable SatisfiesPzi { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs"></a>

```csharp
public IResolvable SatisfiesPzs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts"></a>

```csharp
public DialogflowToolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionConfirmationRequirementInput`<sup>Optional</sup> <a name="ActionConfirmationRequirementInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionConfirmationRequirementInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectorSpecInput`<sup>Optional</sup> <a name="ConnectorSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput"></a>

```csharp
public DialogflowToolConnectorSpec ConnectorSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FunctionSpecInput`<sup>Optional</sup> <a name="FunctionSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput"></a>

```csharp
public DialogflowToolFunctionSpec FunctionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OpenApiSpecInput`<sup>Optional</sup> <a name="OpenApiSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput"></a>

```csharp
public DialogflowToolOpenApiSpec OpenApiSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput"></a>

```csharp
public IResolvable|DialogflowToolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `ToolKeyInput`<sup>Optional</sup> <a name="ToolKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput"></a>

```csharp
public string ToolKeyInput { get; }
```

- *Type:* string

---

##### `ActionConfirmationRequirement`<sup>Required</sup> <a name="ActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionConfirmationRequirement { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

##### `ToolKey`<sup>Required</sup> <a name="ToolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey"></a>

```csharp
public string ToolKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowToolConfig <a name="DialogflowToolConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string ToolKey,
    System.Collections.Generic.IDictionary<string, string> ActionConfirmationRequirement = null,
    DialogflowToolConnectorSpec ConnectorSpec = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    DialogflowToolFunctionSpec FunctionSpec = null,
    string Id = null,
    DialogflowToolOpenApiSpec OpenApiSpec = null,
    string Project = null,
    DialogflowToolTimeouts Timeouts = null,
    string ToolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location">Location</a></code> | <code>string</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey">ToolKey</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement">ActionConfirmationRequirement</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec">ConnectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description">Description</a></code> | <code>string</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId">ToolId</a></code> | <code>string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `ToolKey`<sup>Required</sup> <a name="ToolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey"></a>

```csharp
public string ToolKey { get; set; }
```

- *Type:* string

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `ActionConfirmationRequirement`<sup>Optional</sup> <a name="ActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionConfirmationRequirement { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `ConnectorSpec`<sup>Optional</sup> <a name="ConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec"></a>

```csharp
public DialogflowToolConnectorSpec ConnectorSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `FunctionSpec`<sup>Optional</sup> <a name="FunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec"></a>

```csharp
public DialogflowToolFunctionSpec FunctionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpenApiSpec`<sup>Optional</sup> <a name="OpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec"></a>

```csharp
public DialogflowToolOpenApiSpec OpenApiSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts"></a>

```csharp
public DialogflowToolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

### DialogflowToolConnectorSpec <a name="DialogflowToolConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpec {
    IResolvable|DialogflowToolConnectorSpecActions[] Actions,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions">Actions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name">Name</a></code> | <code>string</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions"></a>

```csharp
public IResolvable|DialogflowToolConnectorSpecActions[] Actions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#actions DialogflowTool#actions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#name DialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DialogflowToolConnectorSpecActions <a name="DialogflowToolConnectorSpecActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpecActions {
    string ConnectionActionId = null,
    DialogflowToolConnectorSpecActionsEntityOperation EntityOperation = null,
    string[] InputFields = null,
    string[] OutputFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId">ConnectionActionId</a></code> | <code>string</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation">EntityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields">InputFields</a></code> | <code>string[]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields">OutputFields</a></code> | <code>string[]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `ConnectionActionId`<sup>Optional</sup> <a name="ConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```csharp
public string ConnectionActionId { get; set; }
```

- *Type:* string

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connection_action_id DialogflowTool#connection_action_id}

---

##### `EntityOperation`<sup>Optional</sup> <a name="EntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation"></a>

```csharp
public DialogflowToolConnectorSpecActionsEntityOperation EntityOperation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_operation DialogflowTool#entity_operation}

---

##### `InputFields`<sup>Optional</sup> <a name="InputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields"></a>

```csharp
public string[] InputFields { get; set; }
```

- *Type:* string[]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_fields DialogflowTool#input_fields}

---

##### `OutputFields`<sup>Optional</sup> <a name="OutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields"></a>

```csharp
public string[] OutputFields { get; set; }
```

- *Type:* string[]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_fields DialogflowTool#output_fields}

---

### DialogflowToolConnectorSpecActionsEntityOperation <a name="DialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpecActionsEntityOperation {
    string EntityId,
    string Operation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId">EntityId</a></code> | <code>string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation">Operation</a></code> | <code>string</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_id DialogflowTool#entity_id}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#operation DialogflowTool#operation}

---

### DialogflowToolFunctionSpec <a name="DialogflowToolFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolFunctionSpec {
    string InputSchema = null,
    string MethodType = null,
    string OutputSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema">InputSchema</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType">MethodType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema">OutputSchema</a></code> | <code>string</code> | Optional. |

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema"></a>

```csharp
public string InputSchema { get; set; }
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_schema DialogflowTool#input_schema}

---

##### `MethodType`<sup>Optional</sup> <a name="MethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType"></a>

```csharp
public string MethodType { get; set; }
```

- *Type:* string

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#method_type DialogflowTool#method_type}

---

##### `OutputSchema`<sup>Optional</sup> <a name="OutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema"></a>

```csharp
public string OutputSchema { get; set; }
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_schema DialogflowTool#output_schema}

---

### DialogflowToolOpenApiSpec <a name="DialogflowToolOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpec {
    string TextSchema,
    DialogflowToolOpenApiSpecAuthentication Authentication = null,
    DialogflowToolOpenApiSpecServiceDirectoryConfig ServiceDirectoryConfig = null,
    DialogflowToolOpenApiSpecTlsConfig TlsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema">TextSchema</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema"></a>

```csharp
public string TextSchema { get; set; }
```

- *Type:* string

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#text_schema DialogflowTool#text_schema}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication"></a>

```csharp
public DialogflowToolOpenApiSpecAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#authentication DialogflowTool#authentication}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```csharp
public DialogflowToolOpenApiSpecServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_directory_config DialogflowTool#service_directory_config}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig"></a>

```csharp
public DialogflowToolOpenApiSpecTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tls_config DialogflowTool#tls_config}

---

### DialogflowToolOpenApiSpecAuthentication <a name="DialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthentication {
    DialogflowToolOpenApiSpecAuthenticationApiKeyConfig ApiKeyConfig = null,
    DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig BearerTokenConfig = null,
    DialogflowToolOpenApiSpecAuthenticationOauthConfig OauthConfig = null,
    DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig ServiceAgentAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key_config DialogflowTool#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig BearerTokenConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#bearer_token_config DialogflowTool#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_config DialogflowTool#oauth_config}

---

##### `ServiceAgentAuthConfig`<sup>Optional</sup> <a name="ServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig ServiceAgentAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth_config DialogflowTool#service_agent_auth_config}

---

### DialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationApiKeyConfig {
    string KeyName,
    string RequestLocation,
    string ApiKey = null,
    string SecretVersionForApiKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>string</code> | Optional. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#key_name DialogflowTool#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```csharp
public string RequestLocation { get; set; }
```

- *Type:* string

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#request_location DialogflowTool#request_location}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key DialogflowTool#api_key}

---

##### `SecretVersionForApiKey`<sup>Optional</sup> <a name="SecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```csharp
public string SecretVersionForApiKey { get; set; }
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_api_key DialogflowTool#secret_version_for_api_key}

---

### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig {
    string SecretVersionForToken = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>string</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `SecretVersionForToken`<sup>Optional</sup> <a name="SecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```csharp
public string SecretVersionForToken { get; set; }
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_token DialogflowTool#secret_version_for_token}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token DialogflowTool#token}

---

### DialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationOauthConfig {
    string ClientId,
    string OauthGrantType,
    string TokenEndpoint,
    string ClientSecret = null,
    string[] Scopes = null,
    string SecretVersionForClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | Optional. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_id DialogflowTool#client_id}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; set; }
```

- *Type:* string

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_grant_type DialogflowTool#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token_endpoint DialogflowTool#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_secret DialogflowTool#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#scopes DialogflowTool#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; set; }
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_client_secret DialogflowTool#secret_version_for_client_secret}

---

### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
    string ServiceAgentAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | Optional. |

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; set; }
```

- *Type:* string

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth DialogflowTool#service_agent_auth}

---

### DialogflowToolOpenApiSpecServiceDirectoryConfig <a name="DialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service DialogflowTool#service}

---

### DialogflowToolOpenApiSpecTlsConfig <a name="DialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecTlsConfig {
    IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts[] CaCerts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts">CaCerts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```csharp
public IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts[] CaCerts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#ca_certs DialogflowTool#ca_certs}

---

### DialogflowToolOpenApiSpecTlsConfigCaCerts <a name="DialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecTlsConfigCaCerts {
    string Cert,
    string DisplayName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">Cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#cert DialogflowTool#cert}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

### DialogflowToolTimeouts <a name="DialogflowToolTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="DialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpecActionsEntityOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolConnectorSpecActionsEntityOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---


### DialogflowToolConnectorSpecActionsList <a name="DialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpecActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get"></a>

```csharp
private DialogflowToolConnectorSpecActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowToolConnectorSpecActions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

---


### DialogflowToolConnectorSpecActionsOutputReference <a name="DialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpecActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">PutEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">ResetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">ResetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields">ResetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">ResetOutputFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityOperation` <a name="PutEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```csharp
private void PutEntityOperation(DialogflowToolConnectorSpecActionsEntityOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `ResetConnectionActionId` <a name="ResetConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```csharp
private void ResetConnectionActionId()
```

##### `ResetEntityOperation` <a name="ResetEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```csharp
private void ResetEntityOperation()
```

##### `ResetInputFields` <a name="ResetInputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```csharp
private void ResetInputFields()
```

##### `ResetOutputFields` <a name="ResetOutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```csharp
private void ResetOutputFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">EntityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">ConnectionActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">EntityOperationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">InputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">OutputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">ConnectionActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields">InputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields">OutputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityOperation`<sup>Required</sup> <a name="EntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```csharp
public DialogflowToolConnectorSpecActionsEntityOperationOutputReference EntityOperation { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `ConnectionActionIdInput`<sup>Optional</sup> <a name="ConnectionActionIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```csharp
public string ConnectionActionIdInput { get; }
```

- *Type:* string

---

##### `EntityOperationInput`<sup>Optional</sup> <a name="EntityOperationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```csharp
public DialogflowToolConnectorSpecActionsEntityOperation EntityOperationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `InputFieldsInput`<sup>Optional</sup> <a name="InputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```csharp
public string[] InputFieldsInput { get; }
```

- *Type:* string[]

---

##### `OutputFieldsInput`<sup>Optional</sup> <a name="OutputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```csharp
public string[] OutputFieldsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionActionId`<sup>Required</sup> <a name="ConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```csharp
public string ConnectionActionId { get; }
```

- *Type:* string

---

##### `InputFields`<sup>Required</sup> <a name="InputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```csharp
public string[] InputFields { get; }
```

- *Type:* string[]

---

##### `OutputFields`<sup>Required</sup> <a name="OutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```csharp
public string[] OutputFields { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowToolConnectorSpecActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>

---


### DialogflowToolConnectorSpecOutputReference <a name="DialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolConnectorSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions">PutActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions"></a>

```csharp
private void PutActions(IResolvable|DialogflowToolConnectorSpecActions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions"></a>

```csharp
public DialogflowToolConnectorSpecActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```csharp
public IResolvable|DialogflowToolConnectorSpecActions[] ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolConnectorSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---


### DialogflowToolFunctionSpecOutputReference <a name="DialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolFunctionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType">ResetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema">ResetOutputSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```csharp
private void ResetInputSchema()
```

##### `ResetMethodType` <a name="ResetMethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```csharp
private void ResetMethodType()
```

##### `ResetOutputSchema` <a name="ResetOutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```csharp
private void ResetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput">MethodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">OutputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType">MethodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema">OutputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```csharp
public string InputSchemaInput { get; }
```

- *Type:* string

---

##### `MethodTypeInput`<sup>Optional</sup> <a name="MethodTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```csharp
public string MethodTypeInput { get; }
```

- *Type:* string

---

##### `OutputSchemaInput`<sup>Optional</sup> <a name="OutputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```csharp
public string OutputSchemaInput { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```csharp
public string InputSchema { get; }
```

- *Type:* string

---

##### `MethodType`<sup>Required</sup> <a name="MethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```csharp
public string MethodType { get; }
```

- *Type:* string

---

##### `OutputSchema`<sup>Required</sup> <a name="OutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```csharp
public string OutputSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolFunctionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---


### DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">ResetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetSecretVersionForApiKey` <a name="ResetSecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```csharp
private void ResetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">SecretVersionForApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```csharp
public string RequestLocationInput { get; }
```

- *Type:* string

---

##### `SecretVersionForApiKeyInput`<sup>Optional</sup> <a name="SecretVersionForApiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```csharp
public string SecretVersionForApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```csharp
public string RequestLocation { get; }
```

- *Type:* string

---

##### `SecretVersionForApiKey`<sup>Required</sup> <a name="SecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```csharp
public string SecretVersionForApiKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">ResetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersionForToken` <a name="ResetSecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```csharp
private void ResetSecretVersionForToken()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">SecretVersionForTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionForTokenInput`<sup>Optional</sup> <a name="SecretVersionForTokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```csharp
public string SecretVersionForTokenInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `SecretVersionForToken`<sup>Required</sup> <a name="SecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```csharp
public string SecretVersionForToken { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```csharp
private void ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```csharp
public string OauthGrantTypeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```csharp
public string SecretVersionForClientSecretInput { get; }
```

- *Type:* string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">PutServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">ResetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(DialogflowToolOpenApiSpecAuthenticationApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```csharp
private void PutBearerTokenConfig(DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(DialogflowToolOpenApiSpecAuthenticationOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `PutServiceAgentAuthConfig` <a name="PutServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```csharp
private void PutServiceAgentAuthConfig(DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```csharp
private void ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetServiceAgentAuthConfig` <a name="ResetServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```csharp
private void ResetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">ServiceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference BearerTokenConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAgentAuthConfig`<sup>Required</sup> <a name="ServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference ServiceAgentAuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig BearerTokenConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `ServiceAgentAuthConfigInput`<sup>Optional</sup> <a name="ServiceAgentAuthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig ServiceAgentAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---


### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```csharp
private void ResetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```csharp
public string ServiceAgentAuthInput { get; }
```

- *Type:* string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### DialogflowToolOpenApiSpecOutputReference <a name="DialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```csharp
private void PutAuthentication(DialogflowToolOpenApiSpecAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(DialogflowToolOpenApiSpecServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(DialogflowToolOpenApiSpecTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">TextSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema">TextSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```csharp
public DialogflowToolOpenApiSpecAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```csharp
public DialogflowToolOpenApiSpecTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```csharp
public DialogflowToolOpenApiSpecAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public DialogflowToolOpenApiSpecServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `TextSchemaInput`<sup>Optional</sup> <a name="TextSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```csharp
public string TextSchemaInput { get; }
```

- *Type:* string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```csharp
public DialogflowToolOpenApiSpecTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```csharp
public string TextSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---


### DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecTlsConfigCaCertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```csharp
private DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>

---


### DialogflowToolOpenApiSpecTlsConfigOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolOpenApiSpecTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">PutCaCerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCerts` <a name="PutCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```csharp
private void PutCaCerts(IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">CaCertsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```csharp
public DialogflowToolOpenApiSpecTlsConfigCaCertsList CaCerts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `CaCertsInput`<sup>Optional</sup> <a name="CaCertsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```csharp
public IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts[] CaCertsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowToolOpenApiSpecTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---


### DialogflowToolTimeoutsOutputReference <a name="DialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowToolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowToolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---



