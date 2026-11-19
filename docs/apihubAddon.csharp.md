# `apihubAddon` Submodule <a name="`apihubAddon` Submodule" id="@cdktn/provider-google.apihubAddon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubAddon <a name="ApihubAddon" id="@cdktn/provider-google.apihubAddon.ApihubAddon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon google_apihub_addon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddon(Construct Scope, string Id, ApihubAddonConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig">ApihubAddonConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig">ApihubAddonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.apihubAddon.ApihubAddon.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apihubAddon.ApihubAddon.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apihubAddon.ApihubAddon.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig"></a>

```csharp
private void PutConfig(ApihubAddonConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts"></a>

```csharp
private void PutTimeouts(ApihubAddonTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddon.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubAddon.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubAddon.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubAddon.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apihubAddon.ApihubAddon.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubAddon.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApihubAddon resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubAddon to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubAddon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApihubAddon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId">BoostSpecGeminiRegionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput">AddonIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId">AddonId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BoostSpecGeminiRegionId`<sup>Required</sup> <a name="BoostSpecGeminiRegionId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.boostSpecGeminiRegionId"></a>

```csharp
public string BoostSpecGeminiRegionId { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.config"></a>

```csharp
public ApihubAddonConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference">ApihubAddonConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeouts"></a>

```csharp
public ApihubAddonTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference">ApihubAddonTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AddonIdInput`<sup>Optional</sup> <a name="AddonIdInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonIdInput"></a>

```csharp
public string AddonIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.configInput"></a>

```csharp
public ApihubAddonConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.timeoutsInput"></a>

```csharp
public IResolvable|ApihubAddonTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---

##### `AddonId`<sup>Required</sup> <a name="AddonId" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.addonId"></a>

```csharp
public string AddonId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apihubAddon.ApihubAddon.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubAddonConfig <a name="ApihubAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AddonId,
    ApihubAddonConfigA Config,
    string Location,
    string Id = null,
    string Project = null,
    ApihubAddonTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId">AddonId</a></code> | <code>string</code> | The ID of the addon. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddonId`<sup>Required</sup> <a name="AddonId" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.addonId"></a>

```csharp
public string AddonId { get; set; }
```

- *Type:* string

The ID of the addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#addon_id ApihubAddon#addon_id}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.config"></a>

```csharp
public ApihubAddonConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#config ApihubAddon#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#location ApihubAddon#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#id ApihubAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#project ApihubAddon#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfig.property.timeouts"></a>

```csharp
public ApihubAddonTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#timeouts ApihubAddon#timeouts}

---

### ApihubAddonConfigA <a name="ApihubAddonConfigA" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigA {
    ApihubAddonConfigAllDataAddonConfig AllDataAddonConfig = null,
    ApihubAddonConfigGatewayPluginAddonConfig GatewayPluginAddonConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig">AllDataAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | all_data_addon_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig">GatewayPluginAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | gateway_plugin_addon_config block. |

---

##### `AllDataAddonConfig`<sup>Optional</sup> <a name="AllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.allDataAddonConfig"></a>

```csharp
public ApihubAddonConfigAllDataAddonConfig AllDataAddonConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

all_data_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_data_addon_config ApihubAddon#all_data_addon_config}

---

##### `GatewayPluginAddonConfig`<sup>Optional</sup> <a name="GatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigA.property.gatewayPluginAddonConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfig GatewayPluginAddonConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

gateway_plugin_addon_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_addon_config ApihubAddon#gateway_plugin_addon_config}

---

### ApihubAddonConfigAllDataAddonConfig <a name="ApihubAddonConfigAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigAllDataAddonConfig {
    bool|IResolvable Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the addon is enabled for all data in the API hub. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the addon is enabled for all data in the API hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#enabled ApihubAddon#enabled}

---

### ApihubAddonConfigGatewayPluginAddonConfig <a name="ApihubAddonConfigGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfig {
    IResolvable|ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] GatewayPluginConfigs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs">GatewayPluginConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]</code> | gateway_plugin_configs block. |

---

##### `GatewayPluginConfigs`<sup>Required</sup> <a name="GatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig.property.gatewayPluginConfigs"></a>

```csharp
public IResolvable|ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] GatewayPluginConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

gateway_plugin_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#gateway_plugin_configs ApihubAddon#gateway_plugin_configs}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs {
    string PluginInstance,
    ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig ApigeeEdgeConfig = null,
    ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig ApigeeOpdkConfig = null,
    ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig ApigeeXHybridConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance">PluginInstance</a></code> | <code>string</code> | The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig">ApigeeEdgeConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | apigee_edge_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig">ApigeeOpdkConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | apigee_opdk_config block. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig">ApigeeXHybridConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | apigee_x_hybrid_config block. |

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.pluginInstance"></a>

```csharp
public string PluginInstance { get; set; }
```

- *Type:* string

The name of the gateway plugin instance for which the config is to be specified. Format: projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#plugin_instance ApihubAddon#plugin_instance}

---

##### `ApigeeEdgeConfig`<sup>Optional</sup> <a name="ApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeEdgeConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig ApigeeEdgeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

apigee_edge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_edge_config ApihubAddon#apigee_edge_config}

---

##### `ApigeeOpdkConfig`<sup>Optional</sup> <a name="ApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeOpdkConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig ApigeeOpdkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

apigee_opdk_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_opdk_config ApihubAddon#apigee_opdk_config}

---

##### `ApigeeXHybridConfig`<sup>Optional</sup> <a name="ApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs.property.apigeeXHybridConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig ApigeeXHybridConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

apigee_x_hybrid_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#apigee_x_hybrid_config ApihubAddon#apigee_x_hybrid_config}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig {
    ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter EnvironmentFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `EnvironmentFilter`<sup>Optional</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig.property.environmentFilter"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter EnvironmentFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter {
    bool|IResolvable AllEnvironments = null,
    string[] Environments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments">AllEnvironments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments">Environments</a></code> | <code>string[]</code> | If provided, only environments in this list are matched. |

---

##### `AllEnvironments`<sup>Optional</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.allEnvironments"></a>

```csharp
public bool|IResolvable AllEnvironments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter.property.environments"></a>

```csharp
public string[] Environments { get; set; }
```

- *Type:* string[]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig {
    ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter EnvironmentFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `EnvironmentFilter`<sup>Optional</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig.property.environmentFilter"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter EnvironmentFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter {
    bool|IResolvable AllEnvironments = null,
    string[] Environments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments">AllEnvironments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments">Environments</a></code> | <code>string[]</code> | If provided, only environments in this list are matched. |

---

##### `AllEnvironments`<sup>Optional</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.allEnvironments"></a>

```csharp
public bool|IResolvable AllEnvironments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter.property.environments"></a>

```csharp
public string[] Environments { get; set; }
```

- *Type:* string[]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig {
    ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter EnvironmentFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | environment_filter block. |

---

##### `EnvironmentFilter`<sup>Optional</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig.property.environmentFilter"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter EnvironmentFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

environment_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environment_filter ApihubAddon#environment_filter}

---

### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter {
    bool|IResolvable AllEnvironments = null,
    string[] Environments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments">AllEnvironments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if this filter should match all environments or only a subset of environments. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments">Environments</a></code> | <code>string[]</code> | If provided, only environments in this list are matched. |

---

##### `AllEnvironments`<sup>Optional</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.allEnvironments"></a>

```csharp
public bool|IResolvable AllEnvironments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if this filter should match all environments or only a subset of environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#all_environments ApihubAddon#all_environments}

---

##### `Environments`<sup>Optional</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter.property.environments"></a>

```csharp
public string[] Environments { get; set; }
```

- *Type:* string[]

If provided, only environments in this list are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#environments ApihubAddon#environments}

---

### ApihubAddonTimeouts <a name="ApihubAddonTimeouts" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#create ApihubAddon#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#delete ApihubAddon#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/apihub_addon#update ApihubAddon#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubAddonConfigAllDataAddonConfigOutputReference <a name="ApihubAddonConfigAllDataAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigAllDataAddonConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigAllDataAddonConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---


### ApihubAddonConfigAOutputReference <a name="ApihubAddonConfigAOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig">PutAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig">PutGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig">ResetAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig">ResetGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllDataAddonConfig` <a name="PutAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig"></a>

```csharp
private void PutAllDataAddonConfig(ApihubAddonConfigAllDataAddonConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putAllDataAddonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `PutGatewayPluginAddonConfig` <a name="PutGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig"></a>

```csharp
private void PutGatewayPluginAddonConfig(ApihubAddonConfigGatewayPluginAddonConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.putGatewayPluginAddonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `ResetAllDataAddonConfig` <a name="ResetAllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetAllDataAddonConfig"></a>

```csharp
private void ResetAllDataAddonConfig()
```

##### `ResetGatewayPluginAddonConfig` <a name="ResetGatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.resetGatewayPluginAddonConfig"></a>

```csharp
private void ResetGatewayPluginAddonConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig">AllDataAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig">GatewayPluginAddonConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput">AllDataAddonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput">GatewayPluginAddonConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllDataAddonConfig`<sup>Required</sup> <a name="AllDataAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfig"></a>

```csharp
public ApihubAddonConfigAllDataAddonConfigOutputReference AllDataAddonConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfigOutputReference">ApihubAddonConfigAllDataAddonConfigOutputReference</a>

---

##### `GatewayPluginAddonConfig`<sup>Required</sup> <a name="GatewayPluginAddonConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigOutputReference GatewayPluginAddonConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigOutputReference</a>

---

##### `AllDataAddonConfigInput`<sup>Optional</sup> <a name="AllDataAddonConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.allDataAddonConfigInput"></a>

```csharp
public ApihubAddonConfigAllDataAddonConfig AllDataAddonConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigAllDataAddonConfig">ApihubAddonConfigAllDataAddonConfig</a>

---

##### `GatewayPluginAddonConfigInput`<sup>Optional</sup> <a name="GatewayPluginAddonConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.gatewayPluginAddonConfigInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfig GatewayPluginAddonConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigAOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigA">ApihubAddonConfigA</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments">ResetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments">ResetEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllEnvironments` <a name="ResetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```csharp
private void ResetAllEnvironments()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```csharp
private void ResetEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">AllEnvironmentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput">EnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments">AllEnvironments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments">Environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllEnvironmentsInput`<sup>Optional</sup> <a name="AllEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```csharp
public bool|IResolvable AllEnvironmentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```csharp
public string[] EnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `AllEnvironments`<sup>Required</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```csharp
public bool|IResolvable AllEnvironments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.environments"></a>

```csharp
public string[] Environments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter">PutEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter">ResetEnvironmentFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentFilter` <a name="PutEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter"></a>

```csharp
private void PutEnvironmentFilter(ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `ResetEnvironmentFilter` <a name="ResetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.resetEnvironmentFilter"></a>

```csharp
private void ResetEnvironmentFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput">EnvironmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentFilter`<sup>Required</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilter"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference EnvironmentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilterOutputReference</a>

---

##### `EnvironmentFilterInput`<sup>Optional</sup> <a name="EnvironmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.environmentFilterInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter EnvironmentFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigEnvironmentFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments">ResetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments">ResetEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllEnvironments` <a name="ResetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```csharp
private void ResetAllEnvironments()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```csharp
private void ResetEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">AllEnvironmentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput">EnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments">AllEnvironments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments">Environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllEnvironmentsInput`<sup>Optional</sup> <a name="AllEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```csharp
public bool|IResolvable AllEnvironmentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```csharp
public string[] EnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `AllEnvironments`<sup>Required</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```csharp
public bool|IResolvable AllEnvironments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.environments"></a>

```csharp
public string[] Environments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter">PutEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter">ResetEnvironmentFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentFilter` <a name="PutEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter"></a>

```csharp
private void PutEnvironmentFilter(ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `ResetEnvironmentFilter` <a name="ResetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.resetEnvironmentFilter"></a>

```csharp
private void ResetEnvironmentFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput">EnvironmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentFilter`<sup>Required</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilter"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference EnvironmentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilterOutputReference</a>

---

##### `EnvironmentFilterInput`<sup>Optional</sup> <a name="EnvironmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.environmentFilterInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter EnvironmentFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigEnvironmentFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments">ResetAllEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments">ResetEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllEnvironments` <a name="ResetAllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetAllEnvironments"></a>

```csharp
private void ResetAllEnvironments()
```

##### `ResetEnvironments` <a name="ResetEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.resetEnvironments"></a>

```csharp
private void ResetEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput">AllEnvironmentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput">EnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments">AllEnvironments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments">Environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllEnvironmentsInput`<sup>Optional</sup> <a name="AllEnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironmentsInput"></a>

```csharp
public bool|IResolvable AllEnvironmentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentsInput`<sup>Optional</sup> <a name="EnvironmentsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environmentsInput"></a>

```csharp
public string[] EnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `AllEnvironments`<sup>Required</sup> <a name="AllEnvironments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.allEnvironments"></a>

```csharp
public bool|IResolvable AllEnvironments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.environments"></a>

```csharp
public string[] Environments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter">PutEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter">ResetEnvironmentFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironmentFilter` <a name="PutEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter"></a>

```csharp
private void PutEnvironmentFilter(ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.putEnvironmentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `ResetEnvironmentFilter` <a name="ResetEnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.resetEnvironmentFilter"></a>

```csharp
private void ResetEnvironmentFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter">EnvironmentFilter</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput">EnvironmentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentFilter`<sup>Required</sup> <a name="EnvironmentFilter" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilter"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference EnvironmentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilterOutputReference</a>

---

##### `EnvironmentFilterInput`<sup>Optional</sup> <a name="EnvironmentFilterInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.environmentFilterInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter EnvironmentFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigEnvironmentFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get"></a>

```csharp
private ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList.property.internalValue"></a>

```csharp
public IResolvable|ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

---


### ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig">PutApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig">PutApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig">PutApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig">ResetApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig">ResetApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig">ResetApigeeXHybridConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApigeeEdgeConfig` <a name="PutApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig"></a>

```csharp
private void PutApigeeEdgeConfig(ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeEdgeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `PutApigeeOpdkConfig` <a name="PutApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig"></a>

```csharp
private void PutApigeeOpdkConfig(ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeOpdkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `PutApigeeXHybridConfig` <a name="PutApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig"></a>

```csharp
private void PutApigeeXHybridConfig(ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.putApigeeXHybridConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `ResetApigeeEdgeConfig` <a name="ResetApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeEdgeConfig"></a>

```csharp
private void ResetApigeeEdgeConfig()
```

##### `ResetApigeeOpdkConfig` <a name="ResetApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeOpdkConfig"></a>

```csharp
private void ResetApigeeOpdkConfig()
```

##### `ResetApigeeXHybridConfig` <a name="ResetApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.resetApigeeXHybridConfig"></a>

```csharp
private void ResetApigeeXHybridConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig">ApigeeEdgeConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig">ApigeeOpdkConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig">ApigeeXHybridConfig</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput">ApigeeEdgeConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput">ApigeeOpdkConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput">ApigeeXHybridConfigInput</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput">PluginInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance">PluginInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApigeeEdgeConfig`<sup>Required</sup> <a name="ApigeeEdgeConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference ApigeeEdgeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfigOutputReference</a>

---

##### `ApigeeOpdkConfig`<sup>Required</sup> <a name="ApigeeOpdkConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference ApigeeOpdkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfigOutputReference</a>

---

##### `ApigeeXHybridConfig`<sup>Required</sup> <a name="ApigeeXHybridConfig" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfig"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference ApigeeXHybridConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfigOutputReference</a>

---

##### `ApigeeEdgeConfigInput`<sup>Optional</sup> <a name="ApigeeEdgeConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeEdgeConfigInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig ApigeeEdgeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeEdgeConfig</a>

---

##### `ApigeeOpdkConfigInput`<sup>Optional</sup> <a name="ApigeeOpdkConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeOpdkConfigInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig ApigeeOpdkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeOpdkConfig</a>

---

##### `ApigeeXHybridConfigInput`<sup>Optional</sup> <a name="ApigeeXHybridConfigInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.apigeeXHybridConfigInput"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig ApigeeXHybridConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsApigeeXHybridConfig</a>

---

##### `PluginInstanceInput`<sup>Optional</sup> <a name="PluginInstanceInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstanceInput"></a>

```csharp
public string PluginInstanceInput { get; }
```

- *Type:* string

---

##### `PluginInstance`<sup>Required</sup> <a name="PluginInstance" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.pluginInstance"></a>

```csharp
public string PluginInstance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>

---


### ApihubAddonConfigGatewayPluginAddonConfigOutputReference <a name="ApihubAddonConfigGatewayPluginAddonConfigOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonConfigGatewayPluginAddonConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs">PutGatewayPluginConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewayPluginConfigs` <a name="PutGatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs"></a>

```csharp
private void PutGatewayPluginConfigs(IResolvable|ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.putGatewayPluginConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs">GatewayPluginConfigs</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput">GatewayPluginConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewayPluginConfigs`<sup>Required</sup> <a name="GatewayPluginConfigs" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigs"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList GatewayPluginConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigsList</a>

---

##### `GatewayPluginConfigsInput`<sup>Optional</sup> <a name="GatewayPluginConfigsInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.gatewayPluginConfigsInput"></a>

```csharp
public IResolvable|ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs[] GatewayPluginConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs">ApihubAddonConfigGatewayPluginAddonConfigGatewayPluginConfigs</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubAddonConfigGatewayPluginAddonConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubAddon.ApihubAddonConfigGatewayPluginAddonConfig">ApihubAddonConfigGatewayPluginAddonConfig</a>

---


### ApihubAddonTimeoutsOutputReference <a name="ApihubAddonTimeoutsOutputReference" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubAddonTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubAddon.ApihubAddonTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApihubAddonTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubAddon.ApihubAddonTimeouts">ApihubAddonTimeouts</a>

---



