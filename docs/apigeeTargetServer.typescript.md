# `apigeeTargetServer` Submodule <a name="`apigeeTargetServer` Submodule" id="@cdktn/provider-google.apigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeTargetServer <a name="ApigeeTargetServer" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

new apigeeTargetServer.ApigeeTargetServer(scope: Construct, id: string, config: ApigeeTargetServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig">ApigeeTargetServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig">ApigeeTargetServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo">putSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo">resetSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSSlInfo` <a name="putSSlInfo" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo"></a>

```typescript
public putSSlInfo(value: ApigeeTargetServerSSlInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeTargetServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSSlInfo` <a name="resetSSlInfo" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo"></a>

```typescript
public resetSSlInfo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeTargetServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

apigeeTargetServer.ApigeeTargetServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

apigeeTargetServer.ApigeeTargetServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

apigeeTargetServer.ApigeeTargetServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

apigeeTargetServer.ApigeeTargetServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeTargetServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeTargetServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput">sSlInfoInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `sSlInfo`<sup>Required</sup> <a name="sSlInfo" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo"></a>

```typescript
public readonly sSlInfo: ApigeeTargetServerSSlInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeTargetServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sSlInfoInput`<sup>Optional</sup> <a name="sSlInfoInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput"></a>

```typescript
public readonly sSlInfoInput: ApigeeTargetServerSSlInfo;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeTargetServerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeTargetServerConfig <a name="ApigeeTargetServerConfig" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

const apigeeTargetServerConfig: apigeeTargetServer.ApigeeTargetServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host">host</a></code> | <code>string</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name">name</a></code> | <code>string</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port">port</a></code> | <code>number</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol">protocol</a></code> | <code>string</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#deletion_policy ApigeeTargetServer#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}

---

##### `sSlInfo`<sup>Optional</sup> <a name="sSlInfo" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo"></a>

```typescript
public readonly sSlInfo: ApigeeTargetServerSSlInfo;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeTargetServerTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}

---

### ApigeeTargetServerSSlInfo <a name="ApigeeTargetServerSSlInfo" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

const apigeeTargetServerSSlInfo: apigeeTargetServer.ApigeeTargetServerSSlInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers">ciphers</a></code> | <code>string[]</code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled">clientAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables two-way TLS. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName">commonName</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enforce">enforce</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, TLS is strictly enforced. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors">ignoreValidationErrors</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias">keyAlias</a></code> | <code>string</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore">keyStore</a></code> | <code>string</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols">protocols</a></code> | <code>string[]</code> | The TLS versioins to be used. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore">trustStore</a></code> | <code>string</code> | The resource ID of the truststore. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#enabled ApigeeTargetServer#enabled}

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#ciphers ApigeeTargetServer#ciphers}

---

##### `clientAuthEnabled`<sup>Optional</sup> <a name="clientAuthEnabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```typescript
public readonly clientAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#client_auth_enabled ApigeeTargetServer#client_auth_enabled}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName"></a>

```typescript
public readonly commonName: ApigeeTargetServerSSlInfoCommonName;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#common_name ApigeeTargetServer#common_name}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, TLS is strictly enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#enforce ApigeeTargetServer#enforce}

---

##### `ignoreValidationErrors`<sup>Optional</sup> <a name="ignoreValidationErrors" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```typescript
public readonly ignoreValidationErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#ignore_validation_errors ApigeeTargetServer#ignore_validation_errors}

---

##### `keyAlias`<sup>Optional</sup> <a name="keyAlias" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#key_alias ApigeeTargetServer#key_alias}

---

##### `keyStore`<sup>Optional</sup> <a name="keyStore" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#key_store ApigeeTargetServer#key_store}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#protocols ApigeeTargetServer#protocols}

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#trust_store ApigeeTargetServer#trust_store}

---

### ApigeeTargetServerSSlInfoCommonName <a name="ApigeeTargetServerSSlInfoCommonName" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

const apigeeTargetServerSSlInfoCommonName: apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value">value</a></code> | <code>string</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">wildcardMatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#value ApigeeTargetServer#value}

---

##### `wildcardMatch`<sup>Optional</sup> <a name="wildcardMatch" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```typescript
public readonly wildcardMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#wildcard_match ApigeeTargetServer#wildcard_match}

---

### ApigeeTargetServerTimeouts <a name="ApigeeTargetServerTimeouts" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

const apigeeTargetServerTimeouts: apigeeTargetServer.ApigeeTargetServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeTargetServerSSlInfoCommonNameOutputReference <a name="ApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

new apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">resetWildcardMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetWildcardMatch` <a name="resetWildcardMatch" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```typescript
public resetWildcardMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">wildcardMatchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">wildcardMatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `wildcardMatchInput`<sup>Optional</sup> <a name="wildcardMatchInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```typescript
public readonly wildcardMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `wildcardMatch`<sup>Required</sup> <a name="wildcardMatch" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```typescript
public readonly wildcardMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeTargetServerSSlInfoCommonName;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---


### ApigeeTargetServerSSlInfoOutputReference <a name="ApigeeTargetServerSSlInfoOutputReference" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

new apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName">putCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">resetClientAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetEnforce">resetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">resetIgnoreValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">resetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore">resetKeyStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore">resetTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonName` <a name="putCommonName" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```typescript
public putCommonName(value: ApigeeTargetServerSSlInfoCommonName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `resetCiphers` <a name="resetCiphers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```typescript
public resetCiphers(): void
```

##### `resetClientAuthEnabled` <a name="resetClientAuthEnabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```typescript
public resetClientAuthEnabled(): void
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```typescript
public resetCommonName(): void
```

##### `resetEnforce` <a name="resetEnforce" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetEnforce"></a>

```typescript
public resetEnforce(): void
```

##### `resetIgnoreValidationErrors` <a name="resetIgnoreValidationErrors" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```typescript
public resetIgnoreValidationErrors(): void
```

##### `resetKeyAlias` <a name="resetKeyAlias" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```typescript
public resetKeyAlias(): void
```

##### `resetKeyStore` <a name="resetKeyStore" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```typescript
public resetKeyStore(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetTrustStore` <a name="resetTrustStore" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```typescript
public resetTrustStore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName">commonName</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">clientAuthEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">commonNameInput</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enforceInput">enforceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">ignoreValidationErrorsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">keyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">keyStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">clientAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enforce">enforce</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">ignoreValidationErrors</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias">keyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore">keyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore">trustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```typescript
public readonly commonName: ApigeeTargetServerSSlInfoCommonNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```typescript
public readonly ciphersInput: string[];
```

- *Type:* string[]

---

##### `clientAuthEnabledInput`<sup>Optional</sup> <a name="clientAuthEnabledInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```typescript
public readonly clientAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: ApigeeTargetServerSSlInfoCommonName;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enforceInput"></a>

```typescript
public readonly enforceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreValidationErrorsInput`<sup>Optional</sup> <a name="ignoreValidationErrorsInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```typescript
public readonly ignoreValidationErrorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```typescript
public readonly keyAliasInput: string;
```

- *Type:* string

---

##### `keyStoreInput`<sup>Optional</sup> <a name="keyStoreInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```typescript
public readonly keyStoreInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```typescript
public readonly trustStoreInput: string;
```

- *Type:* string

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `clientAuthEnabled`<sup>Required</sup> <a name="clientAuthEnabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```typescript
public readonly clientAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enforce"></a>

```typescript
public readonly enforce: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreValidationErrors`<sup>Required</sup> <a name="ignoreValidationErrors" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```typescript
public readonly ignoreValidationErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeTargetServerSSlInfo;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---


### ApigeeTargetServerTimeoutsOutputReference <a name="ApigeeTargetServerTimeoutsOutputReference" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeTargetServer } from '@cdktn/provider-google'

new apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeTargetServerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---



