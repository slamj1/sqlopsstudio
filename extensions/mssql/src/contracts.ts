/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { NotificationType, RequestType } from 'vscode-languageclient';
import { ITelemetryEventProperties, ITelemetryEventMeasures } from './telemetry';
import * as sqlops from 'sqlops';

// ------------------------------- < Telemetry Sent Event > ------------------------------------

/**
 * Event sent when the language service send a telemetry event
 */
export namespace TelemetryNotification {
	export const type = new NotificationType<TelemetryParams, void>('telemetry/sqlevent');
}

/**
 * Update event parameters
 */
export class TelemetryParams {
	public params: {
		eventName: string;
		properties: ITelemetryEventProperties;
		measures: ITelemetryEventMeasures;
	};
}

// ------------------------------- </ Telemetry Sent Event > ----------------------------------

// ------------------------------- < Agent Management > ------------------------------------
// Job management parameters
export interface AgentJobsParams {
	ownerUri: string;
	jobId: string;
}

export interface AgentJobHistoryParams {
	ownerUri: string;
	jobId: string;
}

export interface AgentJobActionParams {
	ownerUri: string;
	jobName: string;
	action: string;
}

export interface CreateAgentJobParams {
	ownerUri: string;
	job: sqlops.AgentJobInfo;
}

export interface UpdateAgentJobParams {
	ownerUri: string;
	originalJobName: string;
	job: sqlops.AgentJobInfo;
}

export interface DeleteAgentJobParams {
	ownerUri: string;
	job: sqlops.AgentJobInfo;
}

// Job Step management parameters
export interface CreateAgentJobStepParams {
	ownerUri: string;
	step: sqlops.AgentJobStepInfo;
}

export interface UpdateAgentJobStepParams {
	ownerUri: string;
	originalJobStepName: string;
	step: sqlops.AgentJobStepInfo;
}

export interface DeleteAgentJobStepParams {
	ownerUri: string;
	step: sqlops.AgentJobStepInfo;
}

// Alert management parameters
export interface AgentAlertsParams {
	ownerUri: string;
}

export interface CreateAgentAlertParams {
	ownerUri: string;
	alert: sqlops.AgentAlertInfo;
}

export interface UpdateAgentAlertParams {
	ownerUri: string;
	originalAlertName: string;
	alert: sqlops.AgentAlertInfo;
}

export interface DeleteAgentAlertParams {
	ownerUri: string;
	alert: sqlops.AgentAlertInfo;
}

// Operator management parameters
export interface AgentOperatorsParams {
	ownerUri: string;
}

export interface CreateAgentOperatorParams {
	ownerUri: string;
	operator: sqlops.AgentOperatorInfo;
}

export interface UpdateAgentOperatorParams {
	ownerUri: string;
	originalOperatorName: string;
	operator: sqlops.AgentOperatorInfo;
}

export interface DeleteAgentOperatorParams {
	ownerUri: string;
	operator: sqlops.AgentOperatorInfo;
}

// Proxy management parameters
export interface AgentProxiesParams {
	ownerUri: string;
}

export interface CreateAgentProxyParams {
	ownerUri: string;
	proxy: sqlops.AgentProxyInfo;
}

export interface UpdateAgentProxyParams {
	ownerUri: string;
	originalProxyName: string;
	proxy: sqlops.AgentProxyInfo;
}

export interface DeleteAgentProxyParams {
	ownerUri: string;
	proxy: sqlops.AgentProxyInfo;
}

// Agent Job management requests
export namespace AgentJobsRequest {
	export const type = new RequestType<AgentJobsParams, sqlops.AgentJobsResult, void, void>('agent/jobs');
}

export namespace AgentJobHistoryRequest {
	export const type = new RequestType<AgentJobHistoryParams, sqlops.AgentJobHistoryResult, void, void>('agent/jobhistory');
}

export namespace AgentJobActionRequest {
	export const type = new RequestType<AgentJobActionParams, sqlops.ResultStatus, void, void>('agent/jobaction');
}

export namespace CreateAgentJobRequest {
	export const type = new RequestType<CreateAgentJobParams, sqlops.CreateAgentJobResult, void, void>('agent/createjob');
}

export namespace UpdateAgentJobRequest {
	export const type = new RequestType<UpdateAgentJobParams, sqlops.UpdateAgentJobResult, void, void>('agent/updatejob');
}

export namespace DeleteAgentJobRequest {
	export const type = new RequestType<DeleteAgentJobParams, sqlops.ResultStatus, void, void>('agent/deletejob');
}

// Job Step requests
export namespace CreateAgentJobStepRequest {
	export const type = new RequestType<CreateAgentJobStepParams, sqlops.CreateAgentJobStepResult, void, void>('agent/createjobstep');
}

export namespace UpdateAgentJobStepRequest {
	export const type = new RequestType<UpdateAgentJobStepParams, sqlops.UpdateAgentJobStepResult, void, void>('agent/updatejobstep');
}

export namespace DeleteAgentJobStepRequest {
	export const type = new RequestType<DeleteAgentJobStepParams, sqlops.ResultStatus, void, void>('agent/deletejobstep');
}

// Alerts requests
export namespace AgentAlertsRequest {
	export const type = new RequestType<CreateAgentAlertParams, sqlops.AgentAlertsResult, void, void>('agent/alerts');
}

export namespace CreateAgentAlertRequest {
	export const type = new RequestType<CreateAgentAlertParams, sqlops.CreateAgentAlertResult, void, void>('agent/createalert');
}

export namespace UpdateAgentAlertRequest {
	export const type = new RequestType<UpdateAgentAlertParams, sqlops.UpdateAgentAlertResult, void, void>('agent/updatealert');
}

export namespace DeleteAgentAlertRequest {
	export const type = new RequestType<DeleteAgentAlertParams, sqlops.ResultStatus, void, void>('agent/deletealert');
}

// Operators requests
export namespace AgentOperatorsRequest {
	export const type = new RequestType<CreateAgentOperatorParams, sqlops.AgentOperatorsResult, void, void>('agent/operators');
}

export namespace CreateAgentOperatorRequest {
	export const type = new RequestType<CreateAgentOperatorParams, sqlops.CreateAgentOperatorResult, void, void>('agent/createoperator');
}

export namespace UpdateAgentOperatorRequest {
	export const type = new RequestType<UpdateAgentOperatorParams, sqlops.UpdateAgentOperatorResult, void, void>('agent/updateoperator');
}

export namespace DeleteAgentOperatorRequest {
	export const type = new RequestType<DeleteAgentOperatorParams, sqlops.ResultStatus, void, void>('agent/deleteoperator');
}

// Proxies requests
export namespace AgentProxiesRequest {
	export const type = new RequestType<CreateAgentProxyParams, sqlops.AgentProxiesResult, void, void>('agent/proxies');
}

export namespace CreateAgentProxyRequest {
	export const type = new RequestType<CreateAgentProxyParams, sqlops.CreateAgentProxyResult, void, void>('agent/createproxy');
}

export namespace UpdateAgentProxyRequest {
	export const type = new RequestType<UpdateAgentProxyParams, sqlops.UpdateAgentProxyResult, void, void>('agent/updateproxy');
}

export namespace DeleteAgentProxyRequest {
	export const type = new RequestType<DeleteAgentProxyParams, sqlops.ResultStatus, void, void>('agent/deleteproxy');
}

// ------------------------------- < Agent Management > ------------------------------------
