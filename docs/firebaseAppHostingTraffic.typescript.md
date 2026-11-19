# `firebaseAppHostingTraffic` Submodule <a name="`firebaseAppHostingTraffic` Submodule" id="@cdktn/provider-google.firebaseAppHostingTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingTraffic <a name="FirebaseAppHostingTraffic" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic google_firebase_app_hosting_traffic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTraffic(scope: Construct, id: string, config: FirebaseAppHostingTrafficConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig">FirebaseAppHostingTrafficConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig">FirebaseAppHostingTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putRolloutPolicy">putRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetRolloutPolicy">resetRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRolloutPolicy` <a name="putRolloutPolicy" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putRolloutPolicy"></a>

```typescript
public putRolloutPolicy(value: FirebaseAppHostingTrafficRolloutPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTarget"></a>

```typescript
public putTarget(value: FirebaseAppHostingTrafficTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTimeouts"></a>

```typescript
public putTimeouts(value: FirebaseAppHostingTrafficTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRolloutPolicy` <a name="resetRolloutPolicy" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetRolloutPolicy"></a>

```typescript
public resetRolloutPolicy(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseAppHostingTraffic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FirebaseAppHostingTraffic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppHostingTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppHostingTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.current">current</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList">FirebaseAppHostingTrafficCurrentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference">FirebaseAppHostingTrafficRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference">FirebaseAppHostingTrafficTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference">FirebaseAppHostingTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicyInput">rolloutPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `current`<sup>Required</sup> <a name="current" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.current"></a>

```typescript
public readonly current: FirebaseAppHostingTrafficCurrentList;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList">FirebaseAppHostingTrafficCurrentList</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rolloutPolicy`<sup>Required</sup> <a name="rolloutPolicy" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicy"></a>

```typescript
public readonly rolloutPolicy: FirebaseAppHostingTrafficRolloutPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference">FirebaseAppHostingTrafficRolloutPolicyOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.target"></a>

```typescript
public readonly target: FirebaseAppHostingTrafficTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference">FirebaseAppHostingTrafficTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppHostingTrafficTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference">FirebaseAppHostingTrafficTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rolloutPolicyInput`<sup>Optional</sup> <a name="rolloutPolicyInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicyInput"></a>

```typescript
public readonly rolloutPolicyInput: FirebaseAppHostingTrafficRolloutPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.targetInput"></a>

```typescript
public readonly targetInput: FirebaseAppHostingTrafficTarget;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirebaseAppHostingTrafficTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingTrafficConfig <a name="FirebaseAppHostingTrafficConfig" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficConfig: firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.backend">backend</a></code> | <code>string</code> | Id of the backend that this Traffic config applies to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.location">location</a></code> | <code>string</code> | The location the Backend that this Traffic config applies to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#id FirebaseAppHostingTraffic#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#project FirebaseAppHostingTraffic#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Id of the backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#backend FirebaseAppHostingTraffic#backend}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location the Backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#location FirebaseAppHostingTraffic#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#id FirebaseAppHostingTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#project FirebaseAppHostingTraffic#project}.

---

##### `rolloutPolicy`<sup>Optional</sup> <a name="rolloutPolicy" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.rolloutPolicy"></a>

```typescript
public readonly rolloutPolicy: FirebaseAppHostingTrafficRolloutPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#rollout_policy FirebaseAppHostingTraffic#rollout_policy}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.target"></a>

```typescript
public readonly target: FirebaseAppHostingTrafficTarget;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#target FirebaseAppHostingTraffic#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppHostingTrafficTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#timeouts FirebaseAppHostingTraffic#timeouts}

---

### FirebaseAppHostingTrafficCurrent <a name="FirebaseAppHostingTrafficCurrent" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficCurrent: firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent = { ... }
```


### FirebaseAppHostingTrafficCurrentSplits <a name="FirebaseAppHostingTrafficCurrentSplits" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficCurrentSplits: firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits = { ... }
```


### FirebaseAppHostingTrafficRolloutPolicy <a name="FirebaseAppHostingTrafficRolloutPolicy" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficRolloutPolicy: firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch">codebaseBranch</a></code> | <code>string</code> | Specifies a branch that triggers a new build to be started with this policy. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that, if true, prevents rollouts from being created via this RolloutPolicy. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.ignoredPaths">ignoredPaths</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]</code> | ignored_paths block. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.requiredPaths">requiredPaths</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]</code> | required_paths block. |

---

##### `codebaseBranch`<sup>Optional</sup> <a name="codebaseBranch" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch"></a>

```typescript
public readonly codebaseBranch: string;
```

- *Type:* string

Specifies a branch that triggers a new build to be started with this policy.

If not set, no automatic rollouts will happen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#codebase_branch FirebaseAppHostingTraffic#codebase_branch}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that, if true, prevents rollouts from being created via this RolloutPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#disabled FirebaseAppHostingTraffic#disabled}

---

##### `ignoredPaths`<sup>Optional</sup> <a name="ignoredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.ignoredPaths"></a>

```typescript
public readonly ignoredPaths: IResolvable | FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]

ignored_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#ignored_paths FirebaseAppHostingTraffic#ignored_paths}

---

##### `requiredPaths`<sup>Optional</sup> <a name="requiredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.requiredPaths"></a>

```typescript
public readonly requiredPaths: IResolvable | FirebaseAppHostingTrafficRolloutPolicyRequiredPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]

required_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#required_paths FirebaseAppHostingTraffic#required_paths}

---

### FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths <a name="FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficRolloutPolicyIgnoredPaths: firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match against. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths.property.type">type</a></code> | <code>string</code> | The type of pattern to match against. Possible values: ["RE2", "GLOB", "PREFIX"]. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#pattern FirebaseAppHostingTraffic#pattern}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of pattern to match against. Possible values: ["RE2", "GLOB", "PREFIX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#type FirebaseAppHostingTraffic#type}

---

### FirebaseAppHostingTrafficRolloutPolicyRequiredPaths <a name="FirebaseAppHostingTrafficRolloutPolicyRequiredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficRolloutPolicyRequiredPaths: firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match against. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths.property.type">type</a></code> | <code>string</code> | The type of pattern to match against. Possible values: ["RE2", "GLOB", "PREFIX"]. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#pattern FirebaseAppHostingTraffic#pattern}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of pattern to match against. Possible values: ["RE2", "GLOB", "PREFIX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#type FirebaseAppHostingTraffic#type}

---

### FirebaseAppHostingTrafficTarget <a name="FirebaseAppHostingTrafficTarget" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficTarget: firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget.property.splits">splits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]</code> | splits block. |

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget.property.splits"></a>

```typescript
public readonly splits: IResolvable | FirebaseAppHostingTrafficTargetSplits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#splits FirebaseAppHostingTraffic#splits}

---

### FirebaseAppHostingTrafficTargetSplits <a name="FirebaseAppHostingTrafficTargetSplits" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficTargetSplits: firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | The build that traffic is being routed to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.percent">percent</a></code> | <code>number</code> | The percentage of traffic to send to the build. Currently must be 100 or 0. |

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

The build that traffic is being routed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#build FirebaseAppHostingTraffic#build}

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

The percentage of traffic to send to the build. Currently must be 100 or 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#percent FirebaseAppHostingTraffic#percent}

---

### FirebaseAppHostingTrafficTimeouts <a name="FirebaseAppHostingTrafficTimeouts" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

const firebaseAppHostingTrafficTimeouts: firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#create FirebaseAppHostingTraffic#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#delete FirebaseAppHostingTraffic#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#update FirebaseAppHostingTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#create FirebaseAppHostingTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#delete FirebaseAppHostingTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/firebase_app_hosting_traffic#update FirebaseAppHostingTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingTrafficCurrentList <a name="FirebaseAppHostingTrafficCurrentList" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingTrafficCurrentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FirebaseAppHostingTrafficCurrentOutputReference <a name="FirebaseAppHostingTrafficCurrentOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.splits">splits</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList">FirebaseAppHostingTrafficCurrentSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent">FirebaseAppHostingTrafficCurrent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.splits"></a>

```typescript
public readonly splits: FirebaseAppHostingTrafficCurrentSplitsList;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList">FirebaseAppHostingTrafficCurrentSplitsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingTrafficCurrent;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent">FirebaseAppHostingTrafficCurrent</a>

---


### FirebaseAppHostingTrafficCurrentSplitsList <a name="FirebaseAppHostingTrafficCurrentSplitsList" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingTrafficCurrentSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FirebaseAppHostingTrafficCurrentSplitsOutputReference <a name="FirebaseAppHostingTrafficCurrentSplitsOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits">FirebaseAppHostingTrafficCurrentSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingTrafficCurrentSplits;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits">FirebaseAppHostingTrafficCurrentSplits</a>

---


### FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList <a name="FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]

---


### FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference <a name="FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>

---


### FirebaseAppHostingTrafficRolloutPolicyOutputReference <a name="FirebaseAppHostingTrafficRolloutPolicyOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.putIgnoredPaths">putIgnoredPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.putRequiredPaths">putRequiredPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch">resetCodebaseBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetIgnoredPaths">resetIgnoredPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetRequiredPaths">resetRequiredPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIgnoredPaths` <a name="putIgnoredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.putIgnoredPaths"></a>

```typescript
public putIgnoredPaths(value: IResolvable | FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.putIgnoredPaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]

---

##### `putRequiredPaths` <a name="putRequiredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.putRequiredPaths"></a>

```typescript
public putRequiredPaths(value: IResolvable | FirebaseAppHostingTrafficRolloutPolicyRequiredPaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.putRequiredPaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]

---

##### `resetCodebaseBranch` <a name="resetCodebaseBranch" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch"></a>

```typescript
public resetCodebaseBranch(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetIgnoredPaths` <a name="resetIgnoredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetIgnoredPaths"></a>

```typescript
public resetIgnoredPaths(): void
```

##### `resetRequiredPaths` <a name="resetRequiredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetRequiredPaths"></a>

```typescript
public resetRequiredPaths(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime">disabledTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.ignoredPaths">ignoredPaths</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList">FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.requiredPaths">requiredPaths</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList">FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput">codebaseBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.ignoredPathsInput">ignoredPathsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.requiredPathsInput">requiredPathsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch">codebaseBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledTime`<sup>Required</sup> <a name="disabledTime" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime"></a>

```typescript
public readonly disabledTime: string;
```

- *Type:* string

---

##### `ignoredPaths`<sup>Required</sup> <a name="ignoredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.ignoredPaths"></a>

```typescript
public readonly ignoredPaths: FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList">FirebaseAppHostingTrafficRolloutPolicyIgnoredPathsList</a>

---

##### `requiredPaths`<sup>Required</sup> <a name="requiredPaths" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.requiredPaths"></a>

```typescript
public readonly requiredPaths: FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList">FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList</a>

---

##### `codebaseBranchInput`<sup>Optional</sup> <a name="codebaseBranchInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput"></a>

```typescript
public readonly codebaseBranchInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoredPathsInput`<sup>Optional</sup> <a name="ignoredPathsInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.ignoredPathsInput"></a>

```typescript
public readonly ignoredPathsInput: IResolvable | FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths">FirebaseAppHostingTrafficRolloutPolicyIgnoredPaths</a>[]

---

##### `requiredPathsInput`<sup>Optional</sup> <a name="requiredPathsInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.requiredPathsInput"></a>

```typescript
public readonly requiredPathsInput: IResolvable | FirebaseAppHostingTrafficRolloutPolicyRequiredPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]

---

##### `codebaseBranch`<sup>Required</sup> <a name="codebaseBranch" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch"></a>

```typescript
public readonly codebaseBranch: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingTrafficRolloutPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

---


### FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList <a name="FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficRolloutPolicyRequiredPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>[]

---


### FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference <a name="FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficRolloutPolicyRequiredPaths;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyRequiredPaths">FirebaseAppHostingTrafficRolloutPolicyRequiredPaths</a>

---


### FirebaseAppHostingTrafficTargetOutputReference <a name="FirebaseAppHostingTrafficTargetOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.putSplits">putSplits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSplits` <a name="putSplits" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.putSplits"></a>

```typescript
public putSplits(value: IResolvable | FirebaseAppHostingTrafficTargetSplits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.putSplits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splits">splits</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList">FirebaseAppHostingTrafficTargetSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splitsInput">splitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splits"></a>

```typescript
public readonly splits: FirebaseAppHostingTrafficTargetSplitsList;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList">FirebaseAppHostingTrafficTargetSplitsList</a>

---

##### `splitsInput`<sup>Optional</sup> <a name="splitsInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splitsInput"></a>

```typescript
public readonly splitsInput: IResolvable | FirebaseAppHostingTrafficTargetSplits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingTrafficTarget;
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

---


### FirebaseAppHostingTrafficTargetSplitsList <a name="FirebaseAppHostingTrafficTargetSplitsList" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingTrafficTargetSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficTargetSplits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>[]

---


### FirebaseAppHostingTrafficTargetSplitsOutputReference <a name="FirebaseAppHostingTrafficTargetSplitsOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput">buildAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput"></a>

```typescript
public readonly buildAttributeInput: string;
```

- *Type:* string

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficTargetSplits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits">FirebaseAppHostingTrafficTargetSplits</a>

---


### FirebaseAppHostingTrafficTimeoutsOutputReference <a name="FirebaseAppHostingTrafficTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingTraffic } from '@cdktn/provider-google'

new firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingTrafficTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a>

---



