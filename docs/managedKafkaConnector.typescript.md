# `managedKafkaConnector` Submodule <a name="`managedKafkaConnector` Submodule" id="@cdktn/provider-google.managedKafkaConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaConnector <a name="ManagedKafkaConnector" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector google_managed_kafka_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

new managedKafkaConnector.ManagedKafkaConnector(scope: Construct, id: string, config: ManagedKafkaConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig">ManagedKafkaConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig">ManagedKafkaConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy">putTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy">resetTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTaskRestartPolicy` <a name="putTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy"></a>

```typescript
public putTaskRestartPolicy(value: ManagedKafkaConnectorTaskRestartPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedKafkaConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs"></a>

```typescript
public resetConfigs(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTaskRestartPolicy` <a name="resetTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy"></a>

```typescript
public resetTaskRestartPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

managedKafkaConnector.ManagedKafkaConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

managedKafkaConnector.ManagedKafkaConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

managedKafkaConnector.ManagedKafkaConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedKafkaConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedKafkaConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput">configsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput">connectClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput">taskRestartPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs">configs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster">connectCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `taskRestartPolicy`<sup>Required</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy"></a>

```typescript
public readonly taskRestartPolicy: ManagedKafkaConnectorTaskRestartPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput"></a>

```typescript
public readonly configsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectClusterInput`<sup>Optional</sup> <a name="connectClusterInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput"></a>

```typescript
public readonly connectClusterInput: string;
```

- *Type:* string

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `taskRestartPolicyInput`<sup>Optional</sup> <a name="taskRestartPolicyInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput"></a>

```typescript
public readonly taskRestartPolicyInput: ManagedKafkaConnectorTaskRestartPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedKafkaConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs"></a>

```typescript
public readonly configs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster"></a>

```typescript
public readonly connectCluster: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaConnectorConfig <a name="ManagedKafkaConnectorConfig" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.Initializer"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

const managedKafkaConnectorConfig: managedKafkaConnector.ManagedKafkaConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster">connectCluster</a></code> | <code>string</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId">connectorId</a></code> | <code>string</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs">configs</a></code> | <code>{[ key: string ]: string}</code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy">taskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectCluster`<sup>Required</sup> <a name="connectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster"></a>

```typescript
public readonly connectCluster: string;
```

- *Type:* string

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs"></a>

```typescript
public readonly configs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#deletion_policy ManagedKafkaConnector#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}.

---

##### `taskRestartPolicy`<sup>Optional</sup> <a name="taskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy"></a>

```typescript
public readonly taskRestartPolicy: ManagedKafkaConnectorTaskRestartPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedKafkaConnectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}

---

### ManagedKafkaConnectorTaskRestartPolicy <a name="ManagedKafkaConnectorTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.Initializer"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

const managedKafkaConnectorTaskRestartPolicy: managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | The maximum amount of time to wait before retrying a failed task. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | The minimum amount of time to wait before retrying a failed task. |

---

##### `maximumBackoff`<sup>Optional</sup> <a name="maximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#maximum_backoff ManagedKafkaConnector#maximum_backoff}

---

##### `minimumBackoff`<sup>Optional</sup> <a name="minimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#minimum_backoff ManagedKafkaConnector#minimum_backoff}

---

### ManagedKafkaConnectorTimeouts <a name="ManagedKafkaConnectorTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.Initializer"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

const managedKafkaConnectorTimeouts: managedKafkaConnector.ManagedKafkaConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaConnectorTaskRestartPolicyOutputReference <a name="ManagedKafkaConnectorTaskRestartPolicyOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

new managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff">resetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff">resetMinimumBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBackoff` <a name="resetMaximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff"></a>

```typescript
public resetMaximumBackoff(): void
```

##### `resetMinimumBackoff` <a name="resetMinimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff"></a>

```typescript
public resetMinimumBackoff(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput">maximumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput">minimumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBackoffInput`<sup>Optional</sup> <a name="maximumBackoffInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput"></a>

```typescript
public readonly maximumBackoffInput: string;
```

- *Type:* string

---

##### `minimumBackoffInput`<sup>Optional</sup> <a name="minimumBackoffInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput"></a>

```typescript
public readonly minimumBackoffInput: string;
```

- *Type:* string

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff"></a>

```typescript
public readonly maximumBackoff: string;
```

- *Type:* string

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff"></a>

```typescript
public readonly minimumBackoff: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedKafkaConnectorTaskRestartPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---


### ManagedKafkaConnectorTimeoutsOutputReference <a name="ManagedKafkaConnectorTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedKafkaConnector } from '@cdktn/provider-google'

new managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedKafkaConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---



