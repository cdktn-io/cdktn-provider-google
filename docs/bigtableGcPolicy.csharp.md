# `bigtableGcPolicy` Submodule <a name="`bigtableGcPolicy` Submodule" id="@cdktn/provider-google.bigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableGcPolicy <a name="BigtableGcPolicy" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicy(Construct Scope, string Id, BigtableGcPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig">BigtableGcPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig">BigtableGcPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge">PutMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion">PutMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules">ResetGcRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion">ResetMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaxAge` <a name="PutMaxAge" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge"></a>

```csharp
private void PutMaxAge(BigtableGcPolicyMaxAge Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `PutMaxVersion` <a name="PutMaxVersion" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion"></a>

```csharp
private void PutMaxVersion(IResolvable|BigtableGcPolicyMaxVersion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(BigtableGcPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetGcRules` <a name="ResetGcRules" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules"></a>

```csharp
private void ResetGcRules()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetIgnoreWarnings"></a>

```csharp
private void ResetIgnoreWarnings()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetMaxVersion` <a name="ResetMaxVersion" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion"></a>

```csharp
private void ResetMaxVersion()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigtableGcPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigtableGcPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigtableGcPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigtableGcPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigtableGcPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BigtableGcPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableGcPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableGcPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BigtableGcPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge">MaxAge</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion">MaxVersion</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference">BigtableGcPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput">ColumnFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput">GcRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput">MaxAgeInput</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput">MaxVersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily">ColumnFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules">GcRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table">Table</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge"></a>

```csharp
public BigtableGcPolicyMaxAgeOutputReference MaxAge { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a>

---

##### `MaxVersion`<sup>Required</sup> <a name="MaxVersion" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion"></a>

```csharp
public BigtableGcPolicyMaxVersionList MaxVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeouts"></a>

```csharp
public BigtableGcPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference">BigtableGcPolicyTimeoutsOutputReference</a>

---

##### `ColumnFamilyInput`<sup>Optional</sup> <a name="ColumnFamilyInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput"></a>

```csharp
public string ColumnFamilyInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GcRulesInput`<sup>Optional</sup> <a name="GcRulesInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput"></a>

```csharp
public string GcRulesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarningsInput"></a>

```csharp
public bool|IResolvable IgnoreWarningsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput"></a>

```csharp
public BigtableGcPolicyMaxAge MaxAgeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `MaxVersionInput`<sup>Optional</sup> <a name="MaxVersionInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput"></a>

```csharp
public IResolvable|BigtableGcPolicyMaxVersion[] MaxVersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|BigtableGcPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily"></a>

```csharp
public string ColumnFamily { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `GcRules`<sup>Required</sup> <a name="GcRules" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules"></a>

```csharp
public string GcRules { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.ignoreWarnings"></a>

```csharp
public bool|IResolvable IgnoreWarnings { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableGcPolicyConfig <a name="BigtableGcPolicyConfig" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ColumnFamily,
    string InstanceName,
    string Table,
    string DeletionPolicy = null,
    string GcRules = null,
    string Id = null,
    bool|IResolvable IgnoreWarnings = null,
    BigtableGcPolicyMaxAge MaxAge = null,
    IResolvable|BigtableGcPolicyMaxVersion[] MaxVersion = null,
    string Mode = null,
    string Project = null,
    BigtableGcPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily">ColumnFamily</a></code> | <code>string</code> | The name of the column family. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table">Table</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules">GcRules</a></code> | <code>string</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge">MaxAge</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion">MaxVersion</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]</code> | max_version block. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode">Mode</a></code> | <code>string</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ColumnFamily`<sup>Required</sup> <a name="ColumnFamily" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily"></a>

```csharp
public string ColumnFamily { get; set; }
```

- *Type:* string

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#column_family BigtableGcPolicy#column_family}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#instance_name BigtableGcPolicy#instance_name}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#table BigtableGcPolicy#table}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#deletion_policy BigtableGcPolicy#deletion_policy}

---

##### `GcRules`<sup>Optional</sup> <a name="GcRules" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules"></a>

```csharp
public string GcRules { get; set; }
```

- *Type:* string

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#gc_rules BigtableGcPolicy#gc_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.ignoreWarnings"></a>

```csharp
public bool|IResolvable IgnoreWarnings { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allows ignoring warnings when updating the GC policy.

This can be used
to increase the gc policy on replicated clusters. Doing this may make clusters be
inconsistent for a longer period of time, before using this make sure you understand
the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#ignore_warnings BigtableGcPolicy#ignore_warnings}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge"></a>

```csharp
public BigtableGcPolicyMaxAge MaxAge { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#max_age BigtableGcPolicy#max_age}

---

##### `MaxVersion`<sup>Optional</sup> <a name="MaxVersion" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion"></a>

```csharp
public IResolvable|BigtableGcPolicyMaxVersion[] MaxVersion { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#max_version BigtableGcPolicy#max_version}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#mode BigtableGcPolicy#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#project BigtableGcPolicy#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.timeouts"></a>

```csharp
public BigtableGcPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#timeouts BigtableGcPolicy#timeouts}

---

### BigtableGcPolicyMaxAge <a name="BigtableGcPolicyMaxAge" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyMaxAge {
    double Days = null,
    string Duration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days">Days</a></code> | <code>double</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration">Duration</a></code> | <code>string</code> | Duration before applying GC policy. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#days BigtableGcPolicy#days}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#duration BigtableGcPolicy#duration}

---

### BigtableGcPolicyMaxVersion <a name="BigtableGcPolicyMaxVersion" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyMaxVersion {
    double Number
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number">Number</a></code> | <code>double</code> | Number of version before applying the GC policy. |

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number"></a>

```csharp
public double Number { get; set; }
```

- *Type:* double

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#number BigtableGcPolicy#number}

---

### BigtableGcPolicyTimeouts <a name="BigtableGcPolicyTimeouts" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableGcPolicyMaxAgeOutputReference <a name="BigtableGcPolicyMaxAgeOutputReference" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyMaxAgeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```csharp
public BigtableGcPolicyMaxAge InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---


### BigtableGcPolicyMaxVersionList <a name="BigtableGcPolicyMaxVersionList" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyMaxVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get"></a>

```csharp
private BigtableGcPolicyMaxVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue"></a>

```csharp
public IResolvable|BigtableGcPolicyMaxVersion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>[]

---


### BigtableGcPolicyMaxVersionOutputReference <a name="BigtableGcPolicyMaxVersionOutputReference" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyMaxVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput">NumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```csharp
public double NumberInput { get; }
```

- *Type:* double

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BigtableGcPolicyMaxVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>

---


### BigtableGcPolicyTimeoutsOutputReference <a name="BigtableGcPolicyTimeoutsOutputReference" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigtableGcPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BigtableGcPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

---



