# `computeZoneVmExtensionPolicy` Submodule <a name="`computeZoneVmExtensionPolicy` Submodule" id="@cdktn/provider-google.computeZoneVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeZoneVmExtensionPolicy <a name="ComputeZoneVmExtensionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy google_compute_zone_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy(scope: Construct, id: string, config: ComputeZoneVmExtensionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig">ComputeZoneVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig">ComputeZoneVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies">putExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors">putInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetInstanceSelectors">resetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionPolicies` <a name="putExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies"></a>

```typescript
public putExtensionPolicies(value: IResolvable | ComputeZoneVmExtensionPolicyExtensionPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---

##### `putInstanceSelectors` <a name="putInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors"></a>

```typescript
public putInstanceSelectors(value: IResolvable | ComputeZoneVmExtensionPolicyInstanceSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeZoneVmExtensionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInstanceSelectors` <a name="resetInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetInstanceSelectors"></a>

```typescript
public resetInstanceSelectors(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeZoneVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeZoneVmExtensionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeZoneVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeZoneVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPolicies">extensionPolicies</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList">ComputeZoneVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectors">instanceSelectors</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList">ComputeZoneVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.managedByGlobal">managedByGlobal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference">ComputeZoneVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPoliciesInput">extensionPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectorsInput">instanceSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPolicies"></a>

```typescript
public readonly extensionPolicies: ComputeZoneVmExtensionPolicyExtensionPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList">ComputeZoneVmExtensionPolicyExtensionPoliciesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceSelectors`<sup>Required</sup> <a name="instanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectors"></a>

```typescript
public readonly instanceSelectors: ComputeZoneVmExtensionPolicyInstanceSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList">ComputeZoneVmExtensionPolicyInstanceSelectorsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `managedByGlobal`<sup>Required</sup> <a name="managedByGlobal" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.managedByGlobal"></a>

```typescript
public readonly managedByGlobal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeZoneVmExtensionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference">ComputeZoneVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `extensionPoliciesInput`<sup>Optional</sup> <a name="extensionPoliciesInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.extensionPoliciesInput"></a>

```typescript
public readonly extensionPoliciesInput: IResolvable | ComputeZoneVmExtensionPolicyExtensionPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---

##### `instanceSelectorsInput`<sup>Optional</sup> <a name="instanceSelectorsInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.instanceSelectorsInput"></a>

```typescript
public readonly instanceSelectorsInput: IResolvable | ComputeZoneVmExtensionPolicyInstanceSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeZoneVmExtensionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeZoneVmExtensionPolicyConfig <a name="ComputeZoneVmExtensionPolicyConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

const computeZoneVmExtensionPolicyConfig: computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.extensionPolicies">extensionPolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.zone">zone</a></code> | <code>string</code> | Name of the zone for this request. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.instanceSelectors">instanceSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.priority">priority</a></code> | <code>number</code> | Priority of this policy. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `extensionPolicies`<sup>Required</sup> <a name="extensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.extensionPolicies"></a>

```typescript
public readonly extensionPolicies: IResolvable | ComputeZoneVmExtensionPolicyExtensionPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#extension_policies ComputeZoneVmExtensionPolicy#extension_policies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#name ComputeZoneVmExtensionPolicy#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#zone ComputeZoneVmExtensionPolicy#zone}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#deletion_policy ComputeZoneVmExtensionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#description ComputeZoneVmExtensionPolicy#description}

---

##### `instanceSelectors`<sup>Optional</sup> <a name="instanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.instanceSelectors"></a>

```typescript
public readonly instanceSelectors: IResolvable | ComputeZoneVmExtensionPolicyInstanceSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#instance_selectors ComputeZoneVmExtensionPolicy#instance_selectors}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#priority ComputeZoneVmExtensionPolicy#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#project ComputeZoneVmExtensionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeZoneVmExtensionPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#timeouts ComputeZoneVmExtensionPolicy#timeouts}

---

### ComputeZoneVmExtensionPolicyExtensionPolicies <a name="ComputeZoneVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

const computeZoneVmExtensionPolicyExtensionPolicies: computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName">extensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion">pinnedVersion</a></code> | <code>string</code> | The specific version of the extension to install. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig">stringConfig</a></code> | <code>string</code> | String-based configuration data for the extension. |

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#extension_name ComputeZoneVmExtensionPolicy#extension_name}.

---

##### `pinnedVersion`<sup>Optional</sup> <a name="pinnedVersion" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```typescript
public readonly pinnedVersion: string;
```

- *Type:* string

The specific version of the extension to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#pinned_version ComputeZoneVmExtensionPolicy#pinned_version}

---

##### `stringConfig`<sup>Optional</sup> <a name="stringConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```typescript
public readonly stringConfig: string;
```

- *Type:* string

String-based configuration data for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#string_config ComputeZoneVmExtensionPolicy#string_config}

---

### ComputeZoneVmExtensionPolicyInstanceSelectors <a name="ComputeZoneVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

const computeZoneVmExtensionPolicyInstanceSelectors: computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```typescript
public readonly labelSelector: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#label_selector ComputeZoneVmExtensionPolicy#label_selector}

---

### ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

const computeZoneVmExtensionPolicyInstanceSelectorsLabelSelector: computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">inclusionLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value pairs representing VM labels. |

---

##### `inclusionLabels`<sup>Optional</sup> <a name="inclusionLabels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```typescript
public readonly inclusionLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value pairs representing VM labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#inclusion_labels ComputeZoneVmExtensionPolicy#inclusion_labels}

---

### ComputeZoneVmExtensionPolicyTimeouts <a name="ComputeZoneVmExtensionPolicyTimeouts" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

const computeZoneVmExtensionPolicyTimeouts: computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#create ComputeZoneVmExtensionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#delete ComputeZoneVmExtensionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/compute_zone_vm_extension_policy#update ComputeZoneVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeZoneVmExtensionPolicyExtensionPoliciesList <a name="ComputeZoneVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get"></a>

```typescript
public get(index: number): ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeZoneVmExtensionPolicyExtensionPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>[]

---


### ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference <a name="ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">resetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">resetStringConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinnedVersion` <a name="resetPinnedVersion" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```typescript
public resetPinnedVersion(): void
```

##### `resetStringConfig` <a name="resetStringConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```typescript
public resetStringConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">extensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">pinnedVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">stringConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">extensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">pinnedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">stringConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionNameInput`<sup>Optional</sup> <a name="extensionNameInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```typescript
public readonly extensionNameInput: string;
```

- *Type:* string

---

##### `pinnedVersionInput`<sup>Optional</sup> <a name="pinnedVersionInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```typescript
public readonly pinnedVersionInput: string;
```

- *Type:* string

---

##### `stringConfigInput`<sup>Optional</sup> <a name="stringConfigInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```typescript
public readonly stringConfigInput: string;
```

- *Type:* string

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

---

##### `pinnedVersion`<sup>Required</sup> <a name="pinnedVersion" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```typescript
public readonly pinnedVersion: string;
```

- *Type:* string

---

##### `stringConfig`<sup>Required</sup> <a name="stringConfig" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```typescript
public readonly stringConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeZoneVmExtensionPolicyExtensionPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyExtensionPolicies">ComputeZoneVmExtensionPolicyExtensionPolicies</a>

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">resetInclusionLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInclusionLabels` <a name="resetInclusionLabels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```typescript
public resetInclusionLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">inclusionLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">inclusionLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inclusionLabelsInput`<sup>Optional</sup> <a name="inclusionLabelsInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```typescript
public readonly inclusionLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inclusionLabels`<sup>Required</sup> <a name="inclusionLabels" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```typescript
public readonly inclusionLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsList <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get"></a>

```typescript
public get(index: number): ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeZoneVmExtensionPolicyInstanceSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>[]

---


### ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference <a name="ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">putLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">resetLabelSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelSelector` <a name="putLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```typescript
public putLabelSelector(value: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `resetLabelSelector` <a name="resetLabelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```typescript
public resetLabelSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">labelSelector</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```typescript
public readonly labelSelector: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector;
```

- *Type:* <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector">ComputeZoneVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeZoneVmExtensionPolicyInstanceSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyInstanceSelectors">ComputeZoneVmExtensionPolicyInstanceSelectors</a>

---


### ComputeZoneVmExtensionPolicyTimeoutsOutputReference <a name="ComputeZoneVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeZoneVmExtensionPolicy } from '@cdktn/provider-google'

new computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeZoneVmExtensionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeZoneVmExtensionPolicy.ComputeZoneVmExtensionPolicyTimeouts">ComputeZoneVmExtensionPolicyTimeouts</a>

---



