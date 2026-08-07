# `dialogflowGenerator` Submodule <a name="`dialogflowGenerator` Submodule" id="@cdktn/provider-google.dialogflowGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowGenerator <a name="DialogflowGenerator" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator google_dialogflow_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGenerator(Construct Scope, string Id, DialogflowGeneratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig">DialogflowGeneratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig">DialogflowGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putInferenceParameter">PutInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putSummarizationContext">PutSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetGeneratorId">ResetGeneratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetInferenceParameter">ResetInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetPublishedModel">ResetPublishedModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTriggerEvent">ResetTriggerEvent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInferenceParameter` <a name="PutInferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putInferenceParameter"></a>

```csharp
private void PutInferenceParameter(DialogflowGeneratorInferenceParameter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putInferenceParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

---

##### `PutSummarizationContext` <a name="PutSummarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putSummarizationContext"></a>

```csharp
private void PutSummarizationContext(DialogflowGeneratorSummarizationContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putSummarizationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowGeneratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGeneratorId` <a name="ResetGeneratorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetGeneratorId"></a>

```csharp
private void ResetGeneratorId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInferenceParameter` <a name="ResetInferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetInferenceParameter"></a>

```csharp
private void ResetInferenceParameter()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublishedModel` <a name="ResetPublishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetPublishedModel"></a>

```csharp
private void ResetPublishedModel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggerEvent` <a name="ResetTriggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTriggerEvent"></a>

```csharp
private void ResetTriggerEvent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowGenerator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowGenerator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowGenerator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowGenerator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DialogflowGenerator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowGenerator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameter">InferenceParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference">DialogflowGeneratorInferenceParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContext">SummarizationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference">DialogflowGeneratorSummarizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference">DialogflowGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorIdInput">GeneratorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameterInput">InferenceParameterInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModelInput">PublishedModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContextInput">SummarizationContextInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEventInput">TriggerEventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorId">GeneratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModel">PublishedModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEvent">TriggerEvent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InferenceParameter`<sup>Required</sup> <a name="InferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameter"></a>

```csharp
public DialogflowGeneratorInferenceParameterOutputReference InferenceParameter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference">DialogflowGeneratorInferenceParameterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SummarizationContext`<sup>Required</sup> <a name="SummarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContext"></a>

```csharp
public DialogflowGeneratorSummarizationContextOutputReference SummarizationContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference">DialogflowGeneratorSummarizationContextOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeouts"></a>

```csharp
public DialogflowGeneratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference">DialogflowGeneratorTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GeneratorIdInput`<sup>Optional</sup> <a name="GeneratorIdInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorIdInput"></a>

```csharp
public string GeneratorIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InferenceParameterInput`<sup>Optional</sup> <a name="InferenceParameterInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameterInput"></a>

```csharp
public DialogflowGeneratorInferenceParameter InferenceParameterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublishedModelInput`<sup>Optional</sup> <a name="PublishedModelInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModelInput"></a>

```csharp
public string PublishedModelInput { get; }
```

- *Type:* string

---

##### `SummarizationContextInput`<sup>Optional</sup> <a name="SummarizationContextInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContextInput"></a>

```csharp
public DialogflowGeneratorSummarizationContext SummarizationContextInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeoutsInput"></a>

```csharp
public IResolvable|DialogflowGeneratorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

---

##### `TriggerEventInput`<sup>Optional</sup> <a name="TriggerEventInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEventInput"></a>

```csharp
public string TriggerEventInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GeneratorId`<sup>Required</sup> <a name="GeneratorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorId"></a>

```csharp
public string GeneratorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublishedModel`<sup>Required</sup> <a name="PublishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModel"></a>

```csharp
public string PublishedModel { get; }
```

- *Type:* string

---

##### `TriggerEvent`<sup>Required</sup> <a name="TriggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEvent"></a>

```csharp
public string TriggerEvent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowGeneratorConfig <a name="DialogflowGeneratorConfig" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    DialogflowGeneratorSummarizationContext SummarizationContext,
    string DeletionPolicy = null,
    string Description = null,
    string GeneratorId = null,
    string Id = null,
    DialogflowGeneratorInferenceParameter InferenceParameter = null,
    string Project = null,
    string PublishedModel = null,
    DialogflowGeneratorTimeouts Timeouts = null,
    string TriggerEvent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.location">Location</a></code> | <code>string</code> | desc. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.summarizationContext">SummarizationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | summarization_context block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.description">Description</a></code> | <code>string</code> | Optional. Human readable description of the generator. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.generatorId">GeneratorId</a></code> | <code>string</code> | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.inferenceParameter">InferenceParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | inference_parameter block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.publishedModel">PublishedModel</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.triggerEvent">TriggerEvent</a></code> | <code>string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#location DialogflowGenerator#location}

---

##### `SummarizationContext`<sup>Required</sup> <a name="SummarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.summarizationContext"></a>

```csharp
public DialogflowGeneratorSummarizationContext SummarizationContext { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

summarization_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summarization_context DialogflowGenerator#summarization_context}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#deletion_policy DialogflowGenerator#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Human readable description of the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#description DialogflowGenerator#description}

---

##### `GeneratorId`<sup>Optional</sup> <a name="GeneratorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.generatorId"></a>

```csharp
public string GeneratorId { get; set; }
```

- *Type:* string

Optional. The ID to use for the generator, which will become the final component of the generator's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#generator_id DialogflowGenerator#generator_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceParameter`<sup>Optional</sup> <a name="InferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.inferenceParameter"></a>

```csharp
public DialogflowGeneratorInferenceParameter InferenceParameter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

inference_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#inference_parameter DialogflowGenerator#inference_parameter}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}.

---

##### `PublishedModel`<sup>Optional</sup> <a name="PublishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.publishedModel"></a>

```csharp
public string PublishedModel { get; set; }
```

- *Type:* string

Optional.

The published Large Language Model name. * To use the latest model version, specify the model name without version number. Example: text-bison * To use a stable model version, specify the version number as well. Example: text-bison@002.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#published_model DialogflowGenerator#published_model}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.timeouts"></a>

```csharp
public DialogflowGeneratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#timeouts DialogflowGenerator#timeouts}

---

##### `TriggerEvent`<sup>Optional</sup> <a name="TriggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.triggerEvent"></a>

```csharp
public string TriggerEvent { get; set; }
```

- *Type:* string

Optional.

The trigger event of the generator. It defines when the generator is triggered in a conversation. Possible values: ["END_OF_UTTERANCE", "MANUAL_CALL", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#trigger_event DialogflowGenerator#trigger_event}

---

### DialogflowGeneratorInferenceParameter <a name="DialogflowGeneratorInferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorInferenceParameter {
    double MaxOutputTokens = null,
    double Temperature = null,
    double TopK = null,
    double TopP = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.maxOutputTokens">MaxOutputTokens</a></code> | <code>double</code> | Optional. Maximum number of the output tokens for the generator. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.temperature">Temperature</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topK">TopK</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topP">TopP</a></code> | <code>double</code> | Optional. |

---

##### `MaxOutputTokens`<sup>Optional</sup> <a name="MaxOutputTokens" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.maxOutputTokens"></a>

```csharp
public double MaxOutputTokens { get; set; }
```

- *Type:* double

Optional. Maximum number of the output tokens for the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#max_output_tokens DialogflowGenerator#max_output_tokens}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

Optional.

Controls the randomness of LLM predictions. Low temperature = less random. High temperature = more random. If unset (or 0), uses a default value of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#temperature DialogflowGenerator#temperature}

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topK"></a>

```csharp
public double TopK { get; set; }
```

- *Type:* double

Optional.

Top-k changes how the model selects tokens for output. A top-k of 1 means the selected token is the most probable among all tokens in the model's vocabulary (also called greedy decoding), while a top-k of 3 means that the next token is selected from among the 3 most probable tokens (using temperature). For each token selection step, the top K tokens with the highest probabilities are sampled. Then tokens are further filtered based on topP with the final token selected using temperature sampling. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [1, 40], default to 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#top_k DialogflowGenerator#top_k}

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topP"></a>

```csharp
public double TopP { get; set; }
```

- *Type:* double

Optional.

Top-p changes how the model selects tokens for output. Tokens are selected from most K (see topK parameter) probable to least until the sum of their probabilities equals the top-p value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the top-p value is 0.5, then the model will select either A or B as the next token (using temperature) and doesn't consider C. The default top-p value is 0.95. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [0.0, 1.0], default to 0.95.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#top_p DialogflowGenerator#top_p}

---

### DialogflowGeneratorSummarizationContext <a name="DialogflowGeneratorSummarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContext {
    IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples[] FewShotExamples = null,
    string OutputLanguageCode = null,
    IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections[] SummarizationSections = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.fewShotExamples">FewShotExamples</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]</code> | few_shot_examples block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.outputLanguageCode">OutputLanguageCode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.summarizationSections">SummarizationSections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]</code> | summarization_sections block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.version">Version</a></code> | <code>string</code> | Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"]. |

---

##### `FewShotExamples`<sup>Optional</sup> <a name="FewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.fewShotExamples"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples[] FewShotExamples { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]

few_shot_examples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#few_shot_examples DialogflowGenerator#few_shot_examples}

---

##### `OutputLanguageCode`<sup>Optional</sup> <a name="OutputLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.outputLanguageCode"></a>

```csharp
public string OutputLanguageCode { get; set; }
```

- *Type:* string

Optional.

The target language of the generated summary. The language code for conversation will be used if this field is empty. Supported 2.0 and later versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#output_language_code DialogflowGenerator#output_language_code}

---

##### `SummarizationSections`<sup>Optional</sup> <a name="SummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.summarizationSections"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections[] SummarizationSections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summarization_sections DialogflowGenerator#summarization_sections}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#version DialogflowGenerator#version}

---

### DialogflowGeneratorSummarizationContextFewShotExamples <a name="DialogflowGeneratorSummarizationContextFewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamples {
    DialogflowGeneratorSummarizationContextFewShotExamplesOutput Output,
    DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext ConversationContext = null,
    System.Collections.Generic.IDictionary<string, string> ExtraInfo = null,
    DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct SummarizationSectionList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | output block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext">ConversationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | conversation_context block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo">ExtraInfo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList">SummarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | summarization_section_list block. |

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.output"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutput Output { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#output DialogflowGenerator#output}

---

##### `ConversationContext`<sup>Optional</sup> <a name="ConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext ConversationContext { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

conversation_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#conversation_context DialogflowGenerator#conversation_context}

---

##### `ExtraInfo`<sup>Optional</sup> <a name="ExtraInfo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraInfo { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Key is the placeholder field name in input, value is the value of the placeholder. E.g. instruction contains "@price", and ingested data has <"price", "10">

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#extra_info DialogflowGenerator#extra_info}

---

##### `SummarizationSectionList`<sup>Optional</sup> <a name="SummarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct SummarizationSectionList { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

summarization_section_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summarization_section_list DialogflowGenerator#summarization_section_list}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext {
    IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] MessageEntries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries">MessageEntries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]</code> | message_entries block. |

---

##### `MessageEntries`<sup>Optional</sup> <a name="MessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] MessageEntries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

message_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#message_entries DialogflowGenerator#message_entries}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries {
    string CreateTime = null,
    string LanguageCode = null,
    string Role = null,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime">CreateTime</a></code> | <code>string</code> | Optional. Create time of the message entry. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode">LanguageCode</a></code> | <code>string</code> | Optional. The language of the text. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role">Role</a></code> | <code>string</code> | Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"]. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text">Text</a></code> | <code>string</code> | Optional. Transcript content of the message. |

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime"></a>

```csharp
public string CreateTime { get; set; }
```

- *Type:* string

Optional. Create time of the message entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#create_time DialogflowGenerator#create_time}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Optional. The language of the text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#language_code DialogflowGenerator#language_code}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#role DialogflowGenerator#role}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Optional. Transcript content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#text DialogflowGenerator#text}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesOutput <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutput {
    DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion SummarySuggestion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion">SummarySuggestion</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | summary_suggestion block. |

---

##### `SummarySuggestion`<sup>Optional</sup> <a name="SummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion SummarySuggestion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

summary_suggestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summary_suggestion DialogflowGenerator#summary_suggestion}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion {
    IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] SummarySections
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections">SummarySections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]</code> | summary_sections block. |

---

##### `SummarySections`<sup>Required</sup> <a name="SummarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] SummarySections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

summary_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summary_sections DialogflowGenerator#summary_sections}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections {
    string Section,
    string Summary
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section">Section</a></code> | <code>string</code> | Required. Name of the section. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary">Summary</a></code> | <code>string</code> | Required. Summary text for the section. |

---

##### `Section`<sup>Required</sup> <a name="Section" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section"></a>

```csharp
public string Section { get; set; }
```

- *Type:* string

Required. Name of the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#section DialogflowGenerator#section}

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary"></a>

```csharp
public string Summary { get; set; }
```

- *Type:* string

Required. Summary text for the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summary DialogflowGenerator#summary}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct {
    IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] SummarizationSections = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections">SummarizationSections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]</code> | summarization_sections block. |

---

##### `SummarizationSections`<sup>Optional</sup> <a name="SummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] SummarizationSections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#summarization_sections DialogflowGenerator#summarization_sections}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections {
    string Definition = null,
    string Key = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition">Definition</a></code> | <code>string</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key">Key</a></code> | <code>string</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type">Type</a></code> | <code>string</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#definition DialogflowGenerator#definition}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#key DialogflowGenerator#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#type DialogflowGenerator#type}

---

### DialogflowGeneratorSummarizationContextSummarizationSections <a name="DialogflowGeneratorSummarizationContextSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextSummarizationSections {
    string Definition = null,
    string Key = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.definition">Definition</a></code> | <code>string</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.key">Key</a></code> | <code>string</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.type">Type</a></code> | <code>string</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#definition DialogflowGenerator#definition}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#key DialogflowGenerator#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#type DialogflowGenerator#type}

---

### DialogflowGeneratorTimeouts <a name="DialogflowGeneratorTimeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#create DialogflowGenerator#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#delete DialogflowGenerator#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#update DialogflowGenerator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#create DialogflowGenerator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#delete DialogflowGenerator#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/dialogflow_generator#update DialogflowGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowGeneratorInferenceParameterOutputReference <a name="DialogflowGeneratorInferenceParameterOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorInferenceParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens">ResetMaxOutputTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxOutputTokens` <a name="ResetMaxOutputTokens" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens"></a>

```csharp
private void ResetMaxOutputTokens()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopK"></a>

```csharp
private void ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopP"></a>

```csharp
private void ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput">MaxOutputTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topKInput">TopKInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topPInput">TopPInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens">MaxOutputTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxOutputTokensInput`<sup>Optional</sup> <a name="MaxOutputTokensInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput"></a>

```csharp
public double MaxOutputTokensInput { get; }
```

- *Type:* double

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topKInput"></a>

```csharp
public double TopKInput { get; }
```

- *Type:* double

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topPInput"></a>

```csharp
public double TopPInput { get; }
```

- *Type:* double

---

##### `MaxOutputTokens`<sup>Required</sup> <a name="MaxOutputTokens" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens"></a>

```csharp
public double MaxOutputTokens { get; }
```

- *Type:* double

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.internalValue"></a>

```csharp
public DialogflowGeneratorInferenceParameter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get"></a>

```csharp
private DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

---


### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime"></a>

```csharp
private void ResetCreateTime()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput">CreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput"></a>

```csharp
public string CreateTimeInput { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries">PutMessageEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries">ResetMessageEntries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessageEntries` <a name="PutMessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries"></a>

```csharp
private void PutMessageEntries(IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

---

##### `ResetMessageEntries` <a name="ResetMessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries"></a>

```csharp
private void ResetMessageEntries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries">MessageEntries</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput">MessageEntriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageEntries`<sup>Required</sup> <a name="MessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList MessageEntries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a>

---

##### `MessageEntriesInput`<sup>Optional</sup> <a name="MessageEntriesInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries[] MessageEntriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.get"></a>

```csharp
private DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion">PutSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion">ResetSummarySuggestion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarySuggestion` <a name="PutSummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion"></a>

```csharp
private void PutSummarySuggestion(DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `ResetSummarySuggestion` <a name="ResetSummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion"></a>

```csharp
private void ResetSummarySuggestion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion">SummarySuggestion</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput">SummarySuggestionInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SummarySuggestion`<sup>Required</sup> <a name="SummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference SummarySuggestion { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a>

---

##### `SummarySuggestionInput`<sup>Optional</sup> <a name="SummarySuggestionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion SummarySuggestionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext">PutConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList">PutSummarizationSectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext">ResetConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo">ResetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList">ResetSummarizationSectionList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConversationContext` <a name="PutConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext"></a>

```csharp
private void PutConversationContext(DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput"></a>

```csharp
private void PutOutput(DialogflowGeneratorSummarizationContextFewShotExamplesOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `PutSummarizationSectionList` <a name="PutSummarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList"></a>

```csharp
private void PutSummarizationSectionList(DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `ResetConversationContext` <a name="ResetConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext"></a>

```csharp
private void ResetConversationContext()
```

##### `ResetExtraInfo` <a name="ResetExtraInfo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo"></a>

```csharp
private void ResetExtraInfo()
```

##### `ResetSummarizationSectionList` <a name="ResetSummarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList"></a>

```csharp
private void ResetSummarizationSectionList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext">ConversationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList">SummarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput">ConversationContextInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput">ExtraInfoInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput">SummarizationSectionListInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo">ExtraInfo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationContext`<sup>Required</sup> <a name="ConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference ConversationContext { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a>

---

##### `SummarizationSectionList`<sup>Required</sup> <a name="SummarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference SummarizationSectionList { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a>

---

##### `ConversationContextInput`<sup>Optional</sup> <a name="ConversationContextInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext ConversationContextInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `ExtraInfoInput`<sup>Optional</sup> <a name="ExtraInfoInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraInfoInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutput OutputInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `SummarizationSectionListInput`<sup>Optional</sup> <a name="SummarizationSectionListInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct SummarizationSectionListInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `ExtraInfo`<sup>Required</sup> <a name="ExtraInfo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraInfo { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections">PutSummarySections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarySections` <a name="PutSummarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections"></a>

```csharp
private void PutSummarySections(IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections">SummarySections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput">SummarySectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SummarySections`<sup>Required</sup> <a name="SummarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList SummarySections { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a>

---

##### `SummarySectionsInput`<sup>Optional</sup> <a name="SummarySectionsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] SummarySectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get"></a>

```csharp
private DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>[]

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput">SectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput">SummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section">Section</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SectionInput`<sup>Optional</sup> <a name="SectionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput"></a>

```csharp
public string SectionInput { get; }
```

- *Type:* string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput"></a>

```csharp
public string SummaryInput { get; }
```

- *Type:* string

---

##### `Section`<sup>Required</sup> <a name="Section" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section"></a>

```csharp
public string Section { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections">PutSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections">ResetSummarizationSections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarizationSections` <a name="PutSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections"></a>

```csharp
private void PutSummarizationSections(IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

---

##### `ResetSummarizationSections` <a name="ResetSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections"></a>

```csharp
private void ResetSummarizationSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections">SummarizationSections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput">SummarizationSectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SummarizationSections`<sup>Required</sup> <a name="SummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList SummarizationSections { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a>

---

##### `SummarizationSectionsInput`<sup>Optional</sup> <a name="SummarizationSectionsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] SummarizationSectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get"></a>

```csharp
private DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>[]

---


### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>

---


### DialogflowGeneratorSummarizationContextOutputReference <a name="DialogflowGeneratorSummarizationContextOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples">PutFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections">PutSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples">ResetFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode">ResetOutputLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections">ResetSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFewShotExamples` <a name="PutFewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples"></a>

```csharp
private void PutFewShotExamples(IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]

---

##### `PutSummarizationSections` <a name="PutSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections"></a>

```csharp
private void PutSummarizationSections(IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]

---

##### `ResetFewShotExamples` <a name="ResetFewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples"></a>

```csharp
private void ResetFewShotExamples()
```

##### `ResetOutputLanguageCode` <a name="ResetOutputLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode"></a>

```csharp
private void ResetOutputLanguageCode()
```

##### `ResetSummarizationSections` <a name="ResetSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections"></a>

```csharp
private void ResetSummarizationSections()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples">FewShotExamples</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList">DialogflowGeneratorSummarizationContextFewShotExamplesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections">SummarizationSections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList">DialogflowGeneratorSummarizationContextSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput">FewShotExamplesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput">OutputLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput">SummarizationSectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode">OutputLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FewShotExamples`<sup>Required</sup> <a name="FewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples"></a>

```csharp
public DialogflowGeneratorSummarizationContextFewShotExamplesList FewShotExamples { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList">DialogflowGeneratorSummarizationContextFewShotExamplesList</a>

---

##### `SummarizationSections`<sup>Required</sup> <a name="SummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections"></a>

```csharp
public DialogflowGeneratorSummarizationContextSummarizationSectionsList SummarizationSections { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList">DialogflowGeneratorSummarizationContextSummarizationSectionsList</a>

---

##### `FewShotExamplesInput`<sup>Optional</sup> <a name="FewShotExamplesInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples[] FewShotExamplesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>[]

---

##### `OutputLanguageCodeInput`<sup>Optional</sup> <a name="OutputLanguageCodeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput"></a>

```csharp
public string OutputLanguageCodeInput { get; }
```

- *Type:* string

---

##### `SummarizationSectionsInput`<sup>Optional</sup> <a name="SummarizationSectionsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections[] SummarizationSectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `OutputLanguageCode`<sup>Required</sup> <a name="OutputLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode"></a>

```csharp
public string OutputLanguageCode { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.internalValue"></a>

```csharp
public DialogflowGeneratorSummarizationContext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

---


### DialogflowGeneratorSummarizationContextSummarizationSectionsList <a name="DialogflowGeneratorSummarizationContextSummarizationSectionsList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextSummarizationSectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.get"></a>

```csharp
private DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>[]

---


### DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference <a name="DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>

---


### DialogflowGeneratorTimeoutsOutputReference <a name="DialogflowGeneratorTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowGeneratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowGeneratorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

---



