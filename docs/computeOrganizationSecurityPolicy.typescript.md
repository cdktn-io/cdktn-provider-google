# `computeOrganizationSecurityPolicy` Submodule <a name="`computeOrganizationSecurityPolicy` Submodule" id="@cdktn/provider-google.computeOrganizationSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrganizationSecurityPolicy <a name="ComputeOrganizationSecurityPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy google_compute_organization_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy(scope: Construct, id: string, config: ComputeOrganizationSecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig">ComputeOrganizationSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig">ComputeOrganizationSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig">putAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig">resetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedOptionsConfig` <a name="putAdvancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig"></a>

```typescript
public putAdvancedOptionsConfig(value: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeOrganizationSecurityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `resetAdvancedOptionsConfig` <a name="resetAdvancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig"></a>

```typescript
public resetAdvancedOptionsConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetShortName"></a>

```typescript
public resetShortName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeOrganizationSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeOrganizationSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeOrganizationSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference">ComputeOrganizationSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput">advancedOptionsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `advancedOptionsConfig`<sup>Required</sup> <a name="advancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfig"></a>

```typescript
public readonly advancedOptionsConfig: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeOrganizationSecurityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference">ComputeOrganizationSecurityPolicyTimeoutsOutputReference</a>

---

##### `advancedOptionsConfigInput`<sup>Optional</sup> <a name="advancedOptionsConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput"></a>

```typescript
public readonly advancedOptionsConfigInput: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeOrganizationSecurityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrganizationSecurityPolicyAdvancedOptionsConfig <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyAdvancedOptionsConfig: computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">jsonParsing</a></code> | <code>string</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel">logLevel</a></code> | <code>string</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize">requestBodyInspectionSize</a></code> | <code>string</code> | The maximum request size chosen by the customer with Waf enabled. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">userIpRequestHeaders</a></code> | <code>string[]</code> | An optional list of case-insensitive request header names to use for resolving the client source IP address. |

---

##### `jsonCustomConfig`<sup>Optional</sup> <a name="jsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```typescript
public readonly jsonCustomConfig: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#json_custom_config ComputeOrganizationSecurityPolicy#json_custom_config}

---

##### `jsonParsing`<sup>Optional</sup> <a name="jsonParsing" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```typescript
public readonly jsonParsing: string;
```

- *Type:* string

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#json_parsing ComputeOrganizationSecurityPolicy#json_parsing}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#log_level ComputeOrganizationSecurityPolicy#log_level}

---

##### `requestBodyInspectionSize`<sup>Optional</sup> <a name="requestBodyInspectionSize" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize"></a>

```typescript
public readonly requestBodyInspectionSize: string;
```

- *Type:* string

The maximum request size chosen by the customer with Waf enabled.

Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#request_body_inspection_size ComputeOrganizationSecurityPolicy#request_body_inspection_size}

---

##### `userIpRequestHeaders`<sup>Optional</sup> <a name="userIpRequestHeaders" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```typescript
public readonly userIpRequestHeaders: string[];
```

- *Type:* string[]

An optional list of case-insensitive request header names to use for resolving the client source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#user_ip_request_headers ComputeOrganizationSecurityPolicy#user_ip_request_headers}

---

### ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig: computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">contentTypes</a></code> | <code>string[]</code> | A list of content types to be parsed as JSON. |

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```typescript
public readonly contentTypes: string[];
```

- *Type:* string[]

A list of content types to be parsed as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#content_types ComputeOrganizationSecurityPolicy#content_types}

---

### ComputeOrganizationSecurityPolicyConfig <a name="ComputeOrganizationSecurityPolicyConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyConfig: computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.parent">parent</a></code> | <code>string</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.description">description</a></code> | <code>string</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.shortName">shortName</a></code> | <code>string</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.type">type</a></code> | <code>string</code> | The type indicates the intended use of the security policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#parent ComputeOrganizationSecurityPolicy#parent}

---

##### `advancedOptionsConfig`<sup>Optional</sup> <a name="advancedOptionsConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```typescript
public readonly advancedOptionsConfig: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#advanced_options_config ComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#deletion_policy ComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#description ComputeOrganizationSecurityPolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#display_name ComputeOrganizationSecurityPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#short_name ComputeOrganizationSecurityPolicy#short_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeOrganizationSecurityPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#timeouts ComputeOrganizationSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#type ComputeOrganizationSecurityPolicy#type}

---

### ComputeOrganizationSecurityPolicyTimeouts <a name="ComputeOrganizationSecurityPolicyTimeouts" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

const computeOrganizationSecurityPolicyTimeouts: computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#create ComputeOrganizationSecurityPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#delete ComputeOrganizationSecurityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#update ComputeOrganizationSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#create ComputeOrganizationSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#delete ComputeOrganizationSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_organization_security_policy#update ComputeOrganizationSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">contentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">contentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypesInput`<sup>Optional</sup> <a name="contentTypesInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```typescript
public readonly contentTypesInput: string[];
```

- *Type:* string[]

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```typescript
public readonly contentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference <a name="ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">putJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">resetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">resetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize">resetRequestBodyInspectionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">resetUserIpRequestHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonCustomConfig` <a name="putJsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```typescript
public putJsonCustomConfig(value: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `resetJsonCustomConfig` <a name="resetJsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```typescript
public resetJsonCustomConfig(): void
```

##### `resetJsonParsing` <a name="resetJsonParsing" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```typescript
public resetJsonParsing(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetRequestBodyInspectionSize` <a name="resetRequestBodyInspectionSize" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize"></a>

```typescript
public resetRequestBodyInspectionSize(): void
```

##### `resetUserIpRequestHeaders` <a name="resetUserIpRequestHeaders" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```typescript
public resetUserIpRequestHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">jsonCustomConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">jsonParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput">requestBodyInspectionSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">userIpRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">jsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize">requestBodyInspectionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">userIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonCustomConfig`<sup>Required</sup> <a name="jsonCustomConfig" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```typescript
public readonly jsonCustomConfig: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `jsonCustomConfigInput`<sup>Optional</sup> <a name="jsonCustomConfigInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```typescript
public readonly jsonCustomConfigInput: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `jsonParsingInput`<sup>Optional</sup> <a name="jsonParsingInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```typescript
public readonly jsonParsingInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `requestBodyInspectionSizeInput`<sup>Optional</sup> <a name="requestBodyInspectionSizeInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput"></a>

```typescript
public readonly requestBodyInspectionSizeInput: string;
```

- *Type:* string

---

##### `userIpRequestHeadersInput`<sup>Optional</sup> <a name="userIpRequestHeadersInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```typescript
public readonly userIpRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `jsonParsing`<sup>Required</sup> <a name="jsonParsing" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```typescript
public readonly jsonParsing: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `requestBodyInspectionSize`<sup>Required</sup> <a name="requestBodyInspectionSize" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize"></a>

```typescript
public readonly requestBodyInspectionSize: string;
```

- *Type:* string

---

##### `userIpRequestHeaders`<sup>Required</sup> <a name="userIpRequestHeaders" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```typescript
public readonly userIpRequestHeaders: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyAdvancedOptionsConfig">ComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---


### ComputeOrganizationSecurityPolicyTimeoutsOutputReference <a name="ComputeOrganizationSecurityPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeOrganizationSecurityPolicy } from '@cdktn/provider-google'

new computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeOrganizationSecurityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeOrganizationSecurityPolicy.ComputeOrganizationSecurityPolicyTimeouts">ComputeOrganizationSecurityPolicyTimeouts</a>

---



