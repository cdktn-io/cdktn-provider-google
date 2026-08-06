# `apigeeEnvironmentApiRevisionDeployment` Submodule <a name="`apigeeEnvironmentApiRevisionDeployment` Submodule" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentApiRevisionDeployment <a name="ApigeeEnvironmentApiRevisionDeployment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment google_apigee_environment_api_revision_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

new apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment(scope: Construct, id: string, config: ApigeeEnvironmentApiRevisionDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig">ApigeeEnvironmentApiRevisionDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig">ApigeeEnvironmentApiRevisionDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride">resetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout">resetSequencedRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeEnvironmentApiRevisionDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOverride` <a name="resetOverride" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetOverride"></a>

```typescript
public resetOverride(): void
```

##### `resetSequencedRollout` <a name="resetSequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetSequencedRollout"></a>

```typescript
public resetSequencedRollout(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeEnvironmentApiRevisionDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvironmentApiRevisionDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvironmentApiRevisionDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentApiRevisionDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths">basepaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime">deployStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput">overrideInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput">sequencedRolloutInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override">override</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout">sequencedRollout</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `basepaths`<sup>Required</sup> <a name="basepaths" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.basepaths"></a>

```typescript
public readonly basepaths: string[];
```

- *Type:* string[]

---

##### `deployStartTime`<sup>Required</sup> <a name="deployStartTime" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deployStartTime"></a>

```typescript
public readonly deployStartTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference">ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference</a>

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.overrideInput"></a>

```typescript
public readonly overrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `sequencedRolloutInput`<sup>Optional</sup> <a name="sequencedRolloutInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRolloutInput"></a>

```typescript
public readonly sequencedRolloutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeEnvironmentApiRevisionDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.override"></a>

```typescript
public readonly override: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `sequencedRollout`<sup>Required</sup> <a name="sequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.sequencedRollout"></a>

```typescript
public readonly sequencedRollout: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentApiRevisionDeploymentConfig <a name="ApigeeEnvironmentApiRevisionDeploymentConfig" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.Initializer"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

const apigeeEnvironmentApiRevisionDeploymentConfig: apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api">api</a></code> | <code>string</code> | Apigee API proxy name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment">environment</a></code> | <code>string</code> | Apigee environment name. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId">orgId</a></code> | <code>string</code> | Apigee organization ID. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision">revision</a></code> | <code>number</code> | API proxy revision number to deploy. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override">override</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, replaces other deployed revisions of this proxy in the environment. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout">sequencedRollout</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, enables sequenced rollout for safe traffic switching. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional service account the deployed proxy runs as. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

Apigee API proxy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#api ApigeeEnvironmentApiRevisionDeployment#api}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#environment ApigeeEnvironmentApiRevisionDeployment#environment}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Apigee organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#org_id ApigeeEnvironmentApiRevisionDeployment#org_id}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

API proxy revision number to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#revision ApigeeEnvironmentApiRevisionDeployment#revision}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#deletion_policy ApigeeEnvironmentApiRevisionDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#id ApigeeEnvironmentApiRevisionDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.override"></a>

```typescript
public readonly override: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, replaces other deployed revisions of this proxy in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#override ApigeeEnvironmentApiRevisionDeployment#override}

---

##### `sequencedRollout`<sup>Optional</sup> <a name="sequencedRollout" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.sequencedRollout"></a>

```typescript
public readonly sequencedRollout: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, enables sequenced rollout for safe traffic switching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#sequenced_rollout ApigeeEnvironmentApiRevisionDeployment#sequenced_rollout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional service account the deployed proxy runs as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#service_account ApigeeEnvironmentApiRevisionDeployment#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentApiRevisionDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#timeouts ApigeeEnvironmentApiRevisionDeployment#timeouts}

---

### ApigeeEnvironmentApiRevisionDeploymentTimeouts <a name="ApigeeEnvironmentApiRevisionDeploymentTimeouts" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.Initializer"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

const apigeeEnvironmentApiRevisionDeploymentTimeouts: apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#create ApigeeEnvironmentApiRevisionDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_environment_api_revision_deployment#delete ApigeeEnvironmentApiRevisionDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference <a name="ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeEnvironmentApiRevisionDeployment } from '@cdktn/provider-google'

new apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeEnvironmentApiRevisionDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeEnvironmentApiRevisionDeployment.ApigeeEnvironmentApiRevisionDeploymentTimeouts">ApigeeEnvironmentApiRevisionDeploymentTimeouts</a>

---



