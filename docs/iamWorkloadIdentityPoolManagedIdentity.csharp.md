# `iamWorkloadIdentityPoolManagedIdentity` Submodule <a name="`iamWorkloadIdentityPoolManagedIdentity` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolManagedIdentity <a name="IamWorkloadIdentityPoolManagedIdentity" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentity(Construct Scope, string Id, IamWorkloadIdentityPoolManagedIdentityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig">IamWorkloadIdentityPoolManagedIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig">IamWorkloadIdentityPoolManagedIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules">PutAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetAttestationRules">ResetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationRules` <a name="PutAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules"></a>

```csharp
private void PutAttestationRules(IResolvable|IamWorkloadIdentityPoolManagedIdentityAttestationRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkloadIdentityPoolManagedIdentityTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `ResetAttestationRules` <a name="ResetAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetAttestationRules"></a>

```csharp
private void ResetAttestationRules()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPoolManagedIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPoolManagedIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPoolManagedIdentity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkloadIdentityPoolManagedIdentity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPoolManagedIdentity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPoolManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRules">AttestationRules</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList">IamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput">AttestationRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput">WorkloadIdentityPoolManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput">WorkloadIdentityPoolNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId">WorkloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttestationRules`<sup>Required</sup> <a name="AttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRules"></a>

```csharp
public IamWorkloadIdentityPoolManagedIdentityAttestationRulesList AttestationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList">IamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a>

---

##### `AttestationRulesInput`<sup>Optional</sup> <a name="AttestationRulesInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolManagedIdentityAttestationRules[] AttestationRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolManagedIdentityTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolManagedIdentityIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolManagedIdentityIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput"></a>

```csharp
public string WorkloadIdentityPoolManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolNamespaceIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput"></a>

```csharp
public string WorkloadIdentityPoolNamespaceIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="WorkloadIdentityPoolManagedIdentityId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId"></a>

```csharp
public string WorkloadIdentityPoolManagedIdentityId { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId"></a>

```csharp
public string WorkloadIdentityPoolNamespaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolManagedIdentityAttestationRules <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentityAttestationRules {
    string GoogleCloudResource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'. |

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; set; }
```

- *Type:* string

A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#google_cloud_resource IamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}

---

### IamWorkloadIdentityPoolManagedIdentityConfig <a name="IamWorkloadIdentityPoolManagedIdentityConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentityConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string WorkloadIdentityPoolManagedIdentityId,
    string WorkloadIdentityPoolNamespaceId,
    IResolvable|IamWorkloadIdentityPoolManagedIdentityAttestationRules[] AttestationRules = null,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable Disabled = null,
    string Id = null,
    string Project = null,
    IamWorkloadIdentityPoolManagedIdentityTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId">WorkloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules">AttestationRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.description">Description</a></code> | <code>string</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="WorkloadIdentityPoolManagedIdentityId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId"></a>

```csharp
public string WorkloadIdentityPoolManagedIdentityId { get; set; }
```

- *Type:* string

The ID to use for the managed identity.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId"></a>

```csharp
public string WorkloadIdentityPoolNamespaceId { get; set; }
```

- *Type:* string

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `AttestationRules`<sup>Optional</sup> <a name="AttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolManagedIdentityAttestationRules[] AttestationRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#attestation_rules IamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#deletion_policy IamWorkloadIdentityPoolManagedIdentity#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#description IamWorkloadIdentityPoolManagedIdentity#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#disabled IamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolManagedIdentityTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#timeouts IamWorkloadIdentityPoolManagedIdentity#timeouts}

---

### IamWorkloadIdentityPoolManagedIdentityTimeouts <a name="IamWorkloadIdentityPoolManagedIdentityTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentityTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolManagedIdentityAttestationRulesList <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRulesList" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentityAttestationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get"></a>

```csharp
private IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolManagedIdentityAttestationRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---


### IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput">GoogleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource">GoogleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleCloudResourceInput`<sup>Optional</sup> <a name="GoogleCloudResourceInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```csharp
public string GoogleCloudResourceInput { get; }
```

- *Type:* string

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource"></a>

```csharp
public string GoogleCloudResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolManagedIdentityAttestationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>

---


### IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference <a name="IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkloadIdentityPoolManagedIdentityTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---



